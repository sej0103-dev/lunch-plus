(() => {
const $=id=>document.getElementById(id);
const days=['월','화','수','목','금'];
const menu={
'월':{'도시락':['오늘의 도시락'],'샐러드 & 포케':['케이준 치킨 샐러드','새우 샐러드','연어롤 샐러드'],'샌드위치':['어니언 크래미 샌드위치','떡갈비 샌드위치'],'하프&하프':['샐러드 + 어니언 크래미 1/2','샐러드 + 떡갈비 1/2']},
'화':{'도시락':['오늘의 도시락'],'샐러드 & 포케':['리코타치즈 샐러드','또띠아 샐러드','매콤소불고기 포케'],'샌드위치':['통새우 샌드위치','매콤닭가슴살 샌드위치'],'하프&하프':['샐러드 + 통새우 1/2','샐러드 + 매콤닭가슴살 1/2']},
'수':{'도시락':['오늘의 도시락'],'샐러드 & 포케':['훈제오리 샐러드','갈릭닭가슴살 스테이크 샐러드','생연어 포케'],'샌드위치':['에그 베이컨 샌드위치','크랜베리 닭가슴살 샌드위치'],'하프&하프':['샐러드 + 에그 베이컨 1/2','샐러드 + 크랜베리 닭가슴살 1/2']},
'목':{'도시락':['오늘의 도시락'],'샐러드 & 포케':['리코타치즈 샐러드','연어 샐러드','간장목살 포케'],'샌드위치':['스크램블 당근라페 샌드위치','소불고기 샌드위치'],'하프&하프':['샐러드 + 스크램블 당근라페 1/2','샐러드 + 소불고기 1/2']},
'금':{'도시락':['오늘의 도시락'],'샐러드 & 포케':['케이준 치킨 샐러드','새우 샐러드','버섯 닭가슴살 소세지 샐러드'],'샌드위치':['햄치즈에그 샌드위치','텐더롤'],'하프&하프':['샐러드 + 햄치즈에그 1/2','샐러드 + 텐더롤 1/2']}
};


const photos = {
  '샐러드 & 포케': {
    '월': ['Cajun-Chicken-Salad.jpg', 'Shrimp-Salad.jpg', 'Salmon-Roll-Salad.jpg'],
    '화': ['Ricotta-Cheese-Salad.jpg', 'Tortilla-Salad.jpg', 'Spicy-Beef-Bulgogi-Poke.jpg'],
    '수': ['Smoked-Duck-Salad.jpg', 'Garlic-Chicken Breast-Steak-Salad.jpg', 'Fresh-salmon-poke.jpg'],
    '목': ['Ricotta-Cheese-Salad.jpg', 'Salmon-Salad.jpg', 'Soy-Sauce-Pork-Neck-Poke.jpg'],
    '금': ['Cajun-Chicken-Salad.jpg', 'Shrimp-Salad.jpg', 'Mushroom-Chicken-Breast-Sausage-Salad.jpg']
  },
  '샌드위치': {
    '월': ['Onion-Creamy-Sandwich.jpg', 'Tteokgalbi-Sandwich.jpg'],
    '화': ['Whole-Shrimp-Sandwich.jpg', 'Spicy-Chicken-Breast-Sandwich.jpg'],
    '수': ['Egg-Bacon-Sandwich.jpg', 'Cranberry-Chicken-Breast-Sandwich.jpg'],
    '목': ['Scrambled-Carrot-Lape-Sandwich.jpg', 'Bulgogi-Sandwich.jpg'],
    '금': ['HamCheese-and-Egg-Sandwich.jpg', 'Tender-roll.jpg']
  },
  '하프&하프': {
    '월': ['Half-Onion-Creamy.jpg', 'Half-Tteokgalbi.jpg'],
    '화': ['Half-Whole-Shrimp.jpg', 'Half-Spicy-Chicken-Breast.jpg'],
    '수': ['Half-Egg Bacon.jpg', 'Half-Cranberry-Chicken-Breast.jpg'],
    '목': ['Half-Scrambled-Carrot-Lafe.jpg', 'Half-Bulgogi.jpg'],
    '금': ['Half-HamCheese-Egg.jpg', 'Half-Tender-Roll.jpg']
  }
};

const cats=['도시락','샐러드 & 포케','샌드위치','하프&하프'];
const fmt=d=>`${d.getMonth()+1}월 ${d.getDate()}일`;
const add=(d,n)=>{let x=new Date(d);x.setDate(x.getDate()+n);return x};
const monday=d=>{let x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-(x.getDay()+6)%7);return x};
const key=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const day=d=>days[(d.getDay()+6)%7];
// 주차별 도시락 식단
// 키는 해당 주 월요일 날짜입니다.
const lunchMenusByWeek = {
  '2026-11-23': {
    '월': [
      '배추된장국',
      '충청도식김치짜글이',
      '탕수육&유자레몬소스',
      '크림비엔나볶음',
      '궁채절임',
      '총각김치',
      '명엽채'
    ],
    '화': [
      '김치어묵국',
      '소고기매콤짜장',
      '집게다리튀김&타르타르소스',
      '피망스크램블',
      '파래무생채',
      '김치',
      '단호박찜&꿀'
    ],
    '수': [
      '고추장참치두부찌개',
      '오븐간장목살구이&초생강',
      '명란계란찜',
      '양념깻잎',
      '양배추찜&쌈장',
      '김치',
      '도토리묵오이무침'
    ],
    '목': [
      '소고기미역국',
      '매콤훈제오리야채볶음',
      '개성왕만두&간장',
      '달달한두부조림',
      '건새우마늘쫑',
      '김치',
      '와사비쌈무'
    ],
    '금': [
      '얼큰소고기대파무국',
      '미트볼&펜네토마토소스',
      '치킨너겟',
      '알감자조림',
      '청포묵김무침',
      '볶음김치',
      '양상추샐러드&소스'
    ]
  }
};

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const config=window.LUNCH_CONFIG||{};
let db=null,orders=[],settings={},category='도시락',choice='오늘의 도시락',admin=false,busy=false;
const today=new Date();today.setHours(0,0,0,0);
let week=monday(today);if(today.getDay()===0||today.getDay()===6)week=add(week,7);
let selected=new Date(week);
const person=()=>$('person').value.trim().replace(/\s+/g,' ');
const normalized=n=>n.trim().replace(/\s+/g,' ').toLocaleLowerCase('ko-KR');
const mine=()=>orders.find(o=>o.menu_date===key(selected)&&o.normalized_name===normalized(person()));
function toast(s){let t=$('toast');t.textContent=s;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800)}
function renderWeek(){
 $('weeklabel').textContent=`${fmt(week)} – ${fmt(add(week,4))}`;
 $('days').innerHTML=days.map((d,i)=>{let dt=add(week,i),has=orders.some(o=>o.menu_date===key(dt)&&person()&&o.normalized_name===normalized(person()));return `<button class="day ${key(dt)===key(selected)?'active':''}" data-date="${key(dt)}"><span class="dn">${d}요일</span><span class="dt">${dt.getMonth()+1}/${dt.getDate()}</span><span class="mark">${has?'✓ 선택완료':key(dt)===key(today)?'오늘':'선택하기'}</span></button>`}).join('');
 document.querySelectorAll('.day').forEach(b=>b.onclick=()=>{selected=new Date(b.dataset.date+'T12:00:00');category='도시락';choice='오늘의 도시락';render()});
}

function renderMenus(){
 const weekday=day(selected);
 const list=menu[weekday][category]||[];
 const imgs=photos[category]?.[weekday]||[];

 // 선택한 날짜가 속한 주의 도시락 식단 가져오기
 const lunchDishes=lunchMenusByWeek[key(monday(selected))]?.[weekday];

 $('tabs').querySelectorAll('.tab').forEach(b=>
   b.classList.toggle('active',b.dataset.cat===category)
 );

 $('menulist').innerHTML=list.length
 ?list.map((m,i)=>{
   const lunchContent=lunchDishes
     ? `<div class="lunch-box" style="
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          justify-content:center;
          gap:5px;
          box-sizing:border-box;
          width:100%;
          height:auto;
          min-height:170px;
          padding:12px;
          background:#fff8f0;
          border-radius:12px;
          text-align:left;
        ">
          ${lunchDishes.map(d=>`
            <span style="
              display:block;
              width:100%;
              font-size:clamp(11px,2vw,14px);
              line-height:1.4;
              word-break:keep-all;
              overflow-wrap:anywhere;
            ">${esc(d)}</span>
          `).join('')}
        </div>`
     : '<div class="lunch-box">🍱</div>';

   return `
     <button class="menu ${choice===m?'selected':''}" data-menu="${esc(m)}">
       ${category==='도시락'
         ? lunchContent
         : `<img src="assets/${imgs[i]||''}" alt="${esc(m)}">`
       }
       <div class="menuinfo">
         <div class="menuname">${esc(m)}</div>
         <div class="pick">${choice===m?'✓ 선택됨':'메뉴 선택하기 →'}</div>
       </div>
     </button>
   `;
 }).join('')
 : '<div class="empty" style="grid-column:1/-1">이 요일에는 등록된 메뉴가 없습니다.</div>';

 $('menulist').querySelectorAll('.menu').forEach(b=>{
   b.onclick=()=>{
     choice=b.dataset.menu;
     renderMenus();
     renderNotice();
   };
 });
}


function renderNotice(){
  const n=person(),existing=orders.find(o=>o.menu_date===key(selected)&&n&&o.normalized_name===normalized(n)),closed=settings[key(selected)]?.is_closed;
  let msg='',cls='notice';
  if(!db){msg='사이트 관리자가 데이터베이스 연결을 완료해야 주문할 수 있습니다.';cls+=' error'}
  else if(!n)msg='이름을 입력하고 원하는 메뉴를 선택해 주세요.';
  else if(closed){msg='이 날짜는 주문이 마감되었습니다.';cls+=' error'}
  else if(existing){
    msg=existing.menu_name===choice
      ? `${n}님은 이미 이 메뉴를 선택했습니다.`
      : `${n}님 · 기존 ${existing.menu_name} → 변경할 메뉴 ${choice}`;
    cls+=' success';
  }
  else msg=`${n}님 · ${fmt(selected)} ${day(selected)}요일 · ${choice} 선택 예정`;
  $('notice').className=cls;
  $('notice').textContent=msg;
  $('submit').disabled=!db||!n||!choice||!!closed||busy;
}


function renderRecords(){
 let list=orders
   .filter(o=>o.menu_date===key(selected))
   .sort((a,b)=>a.created_at.localeCompare(b.created_at));

 $('count').textContent=`${list.length}명 선택`;

 // 메뉴별 주문 수량 계산
 const totals=Object.entries(
   list.reduce((acc,o)=>{
     const name=o.menu_name||'메뉴 미지정';
     acc[name]=(acc[name]||0)+1;
     return acc;
   },{})
 ).sort((a,b)=>a[0].localeCompare(b[0],'ko'));

 const recordsHtml=list.length
   ?list.map(o=>`
     <div class="record">
       <div>
         <div class="record-name">${esc(o.name)}</div>
         <div class="record-menu">${esc(o.menu_name)}</div>
       </div>
       <span class="record-cat">${esc(o.category)}</span>
     </div>
   `).join('')
   : '<div class="empty">아직 선택한 사람이 없습니다.</div>';

 // 메뉴별 합계 영역
 const summaryHtml=totals.length
   ? `
     <div style="
       margin-top:16px;
       padding:16px;
       background:#fff8f0;
       border-radius:12px;
     ">
       <div style="
         font-size:16px;
         font-weight:bold;
         margin-bottom:12px;
       ">📋 메뉴별 합계</div>

       ${totals.map(([name,count])=>`
         <div style="
           display:flex;
           justify-content:space-between;
           align-items:center;
           padding:7px 0;
           border-bottom:1px solid #eee0d5;
           font-size:14px;
         ">
           <span>${esc(name)}</span>
           <b>x${count}</b>
         </div>
       `).join('')}
     </div>
   `
   : '';

 $('records').innerHTML=recordsHtml+summaryHtml;
}

function renderAdmin(){
 $('adminState').textContent=admin?'관리자 로그인':'로그아웃';
 $('adminLogin').hidden=admin;$('adminTools').hidden=!admin;
 if(!admin)return;
 const closed=!!settings[key(selected)]?.is_closed;
 $('toggleClose').textContent=closed?'이 날짜 주문 다시 열기':'이 날짜 주문 마감하기';
 $('closeState').textContent=`${fmt(selected)} ${day(selected)}요일 주문 상태: ${closed?'마감':'주문 가능'}`;
 const list=orders.filter(o=>o.menu_date===key(selected));
 $('adminOrderList').innerHTML=list.length?list.map(o=>`<div class="admin-order"><div><b>${esc(o.name)}</b><small>${esc(o.menu_name)} · ${esc(o.category)}</small></div><div class="admin-buttons"><button class="admin-btn edit" data-id="${o.id}">수정</button><button class="admin-btn danger" data-del="${o.id}">취소</button></div></div>`).join(''):'<p class="hint">이 날짜 주문이 없습니다.</p>';
 $('adminOrderList').querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>cancelOrder(b.dataset.del));
 $('adminOrderList').querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>editOrder(b.dataset.id));
}
function render(){ $('dateheading').textContent=`${day(selected)}요일 메뉴`; $('datepill').textContent=fmt(selected);renderWeek();renderMenus();renderNotice();renderRecords();renderAdmin()}
async function load(){
 if(!db)return;
 const from=key(week),to=key(add(week,4));
 const [o,s]=await Promise.all([
  db.from('lunch_orders').select('*').gte('menu_date',from).lte('menu_date',to).order('created_at'),
  db.from('lunch_date_settings').select('*').gte('menu_date',from).lte('menu_date',to)
 ]);
 if(o.error||s.error){console.error(o.error||s.error);toast('데이터를 불러오지 못했습니다.');return}
 orders=o.data||[];settings=Object.fromEntries((s.data||[]).map(x=>[x.menu_date,x]));render();
}

async function submit(){
  const n=person();
  if(!db||!n||busy)return;

  const existing=mine();
  if(existing&&existing.menu_name===choice){
    toast('이미 선택된 메뉴입니다.');
    return;
  }

  busy=true;
  renderNotice();

  let error;

  if(existing){
    ({error}=await db.from('lunch_orders')
      .update({category,menu_name:choice})
      .eq('id',existing.id));
  }else{
    ({error}=await db.from('lunch_orders')
      .insert({
        menu_date:key(selected),
        name:n,
        category,
        menu_name:choice
      }));
  }

  busy=false;

  if(error){
    toast('저장 실패: 잠시 후 다시 시도해 주세요.');
    await load();
    return;
  }

  toast(existing?'점심 메뉴 변경이 완료되었습니다!':'점심 메뉴 선택이 완료되었습니다!');
  await load();
}

async function adminSignIn(){
 const {error}=await db.auth.signInWithPassword({email:$('adminEmail').value.trim(),password:$('adminPassword').value});
 if(error){toast('로그인 정보를 확인해 주세요.');return}
 const {data,isAdminError}=await db.rpc('is_lunch_admin');
 if(isAdminError||data!==true){await db.auth.signOut();toast('관리자 권한이 등록된 계정이 아닙니다.');return}
 admin=true;renderAdmin();toast('관리자로 로그인했습니다.');
}
async function adminSignOut(){await db.auth.signOut();admin=false;renderAdmin();toast('로그아웃했습니다.')}
async function toggleClose(){
 const date=key(selected),closed=!!settings[date]?.is_closed;
 const {error}=await db.from('lunch_date_settings').upsert({menu_date:date,is_closed:!closed,updated_at:new Date().toISOString()});
 if(error){toast('마감 상태 변경 실패: 관리자 권한을 확인해 주세요.');return}
 toast(!closed?'해당 날짜 주문을 마감했습니다.':'주문을 다시 열었습니다.');await load();
}
async function cancelOrder(id){
 if(!confirm('이 주문을 취소할까요?'))return;
 const {error}=await db.from('lunch_orders').delete().eq('id',id);
 if(error){toast('주문 취소에 실패했습니다.');return}toast('주문을 취소했습니다.');await load();
}
async function editOrder(id){
 const row=orders.find(o=>String(o.id)===String(id));if(!row)return;
 const name=prompt('이름을 수정하세요.',row.name);if(name===null)return;
 const menuName=prompt('메뉴명을 수정하세요.',row.menu_name);if(menuName===null)return;
 if(!name.trim()||!menuName.trim()){toast('이름과 메뉴를 입력해 주세요.');return}
 const {error}=await db.from('lunch_orders').update({name:name.trim(),menu_name:menuName.trim()}).eq('id',id);
 if(error){toast('수정 실패: 동일한 이름의 주문이 있는지 확인해 주세요.');return}toast('주문을 수정했습니다.');await load();
}
function exportCsv(){
 const list=orders.filter(o=>o.menu_date===key(selected));
 const rows=[['날짜','이름','분류','메뉴','선택시간'],...list.map(o=>[o.menu_date,o.name,o.category,o.menu_name,o.created_at])];
 const csv='\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');
 const a=document.createElement('a'),url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
 a.href=url;a.download=`lunch-orders-${key(selected)}.csv`;a.click();URL.revokeObjectURL(url);
}
async function init(){
 const valid=config.SUPABASE_URL&&config.SUPABASE_ANON_KEY&&!config.SUPABASE_URL.includes('YOUR_')&&!config.SUPABASE_ANON_KEY.includes('YOUR_')&&window.supabase;
 if(valid){
  db=window.supabase.createClient(config.SUPABASE_URL,config.SUPABASE_ANON_KEY);
  const {data:{session}}=await db.auth.getSession();
  if(session){const {data}=await db.rpc('is_lunch_admin');admin=data===true}
  await load();
  db.channel('lunch-live').on('postgres_changes',{event:'*',schema:'public',table:'lunch_orders'},load).on('postgres_changes',{event:'*',schema:'public',table:'lunch_date_settings'},load).subscribe();
 }
 $('person').addEventListener('input',render);
 $('prev').onclick=()=>{week=add(week,-7);selected=add(selected,-7);render();load()};
 $('next').onclick=()=>{week=add(week,7);selected=add(selected,7);render();load()};
 $('tabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>{category=b.dataset.cat;choice=(menu[day(selected)][category]||[])[0]||'';renderMenus();renderNotice()});
 $('submit').onclick=submit;
 $('adminSignIn').onclick=adminSignIn;$('adminSignOut').onclick=adminSignOut;$('toggleClose').onclick=toggleClose;$('exportCsv').onclick=exportCsv;
 render();
}
init();
})();
