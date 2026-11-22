# Lunch Plus 점심 메뉴 선택 사이트

## 가입 없이 쓸 수 있나요?
`index.html`을 PC에서 직접 열면 화면 미리보기는 가능하지만, 직원별 주문 공유, 여러 기기 동기화, 서버에서의 중복 방지는 작동하지 않습니다. 실제 운영에는 무료 Supabase 프로젝트와 무료 GitHub 계정이 필요합니다.

## 제공 기능
- 모바일/PC 반응형
- 월~금 메뉴 선택, 이전 주/다음 주 이동, 주말 다음 주 선주문
- 도시락 / 샐러드 & 포케 / 샌드위치 / 하프&하프
- 제공된 메뉴표에서 추출한 음식 사진
- 날짜+정규화한 이름 기준 1인 1건 DB 중복 방지
- 여러 기기에서 주문 현황 공유 및 Realtime 갱신
- 관리자 이메일 로그인
- 날짜별 주문 마감/재오픈
- 관리자 주문 수정/취소
- 날짜별 CSV 다운로드(엑셀에서 열기 가능)

## 1. Supabase 설정
1. https://supabase.com 에서 무료 계정으로 프로젝트를 생성합니다.
2. SQL Editor에서 `supabase/schema.sql` 전체를 실행합니다.
3. Authentication > Users에서 관리자 계정을 이메일/비밀번호로 생성합니다.
4. 관리자 계정은 딱 한 명만 사용할 수 있습니다. Authentication > Users에서 만든 관리자 이메일 하나만 SQL Editor에 등록하세요. 다른 계정은 관리자 권한을 받을 수 없습니다.

```sql
insert into public.lunch_admins (user_id)
select id from auth.users where email = '관리자이메일@example.com'
on conflict (user_id) do nothing;
```

5. Project Settings > API에서 Project URL과 anon/public key를 복사합니다.
6. `config.js`의 `SUPABASE_URL`, `SUPABASE_ANON_KEY`에 붙여넣습니다.
   - `service_role` / secret key는 절대 브라우저 코드에 넣지 마세요.
7. Database > Replication에서 `lunch_orders`, `lunch_date_settings` 테이블의 Realtime을 켭니다.

## 2. 무료 GitHub Pages 배포
1. https://github.com 에 가입하고 새 Public repository를 만듭니다(예: lunch-plus).
2. ZIP을 풀고 `index.html`, `style.css`, `app.js`, `config.js`, `assets/`, `supabase/`를 저장소 최상위에 업로드합니다.
3. Settings > Pages > Deploy from a branch에서 `main`과 `/(root)`를 선택하고 저장합니다.
4. 배포 완료 후 표시되는 `https://계정명.github.io/lunch-plus/` 주소를 직원들에게 공유합니다.

## 3. 운영 시
- 직원은 웹사이트에서 이름을 쓰고 메뉴를 선택합니다.
- 동일 날짜에 같은 이름은 DB에서 중복 주문이 차단됩니다.
- 관리자 패널에서 로그인 후 날짜 주문 마감/재오픈, 주문 수정/취소, CSV 다운로드가 가능합니다.
- 동명이인이 있을 수 있다면 이름 대신 사번 또는 사내 로그인 기반 식별로 바꾸는 것을 권장합니다.
- 현재 주문자 확인은 이름 기반이며, 이름을 다른 사람 이름으로 입력하는 것을 막는 직원 인증은 없습니다.
- Supabase/GitHub 무료 플랜의 용량/정책은 변경될 수 있습니다.

## 메뉴 변경사항
샐러드와 포케를 하나의 `샐러드 & 포케` 카테고리로 통합했습니다.
- 월: 케이준 치킨, 새우, 연어롤
- 화: 리코타치즈, 또띠아, 매콤소불고기 포케
- 수: 훈제오리, 갈릭닭가슴살 스테이크, 생연어 포케
- 목: 리코타치즈, 연어, 간장목살 포케
- 금: 케이준 치킨, 새우, 버섯 닭가슴살 소세지

샌드위치/하프&하프 메뉴는 보내주신 메뉴표를 반영했습니다.
