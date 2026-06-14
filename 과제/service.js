const MOVIES = [
  { id: 1, title: '어벤져스: 인피니티 워', year: 2018, genre: 'action', rating: 9.08, director: '루소 형제', runtime: '149분', desc: '새로운 조합을 이룬 어벤져스, 역대 최강 빌런 타노스에 맞서 세계의 운명이 걸린 인피니티 스톤을 향한 무한 대결이 펼쳐진다! 마블의 클라이맥스를 목격하라!', poster: 'img/어벤져스-인피티니워.jpg', similar: [{ title: '어벤져스: 엔드게임', poster: 'img/어벤져스-엔드게임.jpg' }, { title: '어벤져스: 시빌 워', poster: 'img/어벤져스-시빌워.jpeg' }, { title: '가디언즈 오브 갤럭시', poster: 'img/가디언즈오브갤럭시.jpeg' }, { title: '잭 스나이더의 저스티스 리그', poster: 'img/잭스나이더의저스티스리그.jpeg' }, { title: '이터널스', poster: 'img/이터널스.jpeg' }] },
  { id: 2, title: '어벤져스: 엔드게임', year: 2019, genre: 'action', rating: 9.50, director: '루소 형제', runtime: '181분', desc: '인피니티 워 이후 절반만 살아남은 지구 마지막 희망이 된 어벤져스 먼저 떠난 그들을 위해 모든 것을 걸었다! 위대한 어벤져스 운명을 바꿀 최후의 전쟁이 펼쳐진다!', poster: 'img/어벤져스-엔드게임.jpg', similar: [{ title: '어벤져스: 인피니티 워', poster: 'img/어벤져스-인피티니워.jpg' }, { title: '토르: 라그나로크', poster: 'img/토르-라그나로크.png' }, { title: '블랙 팬서: 오칸다 포에버', poster: 'img/블랙팬서-와칸다포에버.jpeg' }, { title: '잭 스나이더의 저스티스 리그', poster: 'img/잭스나이더의저스티스리그.jpeg' }, { title: '아바타: 물의 길', poster: 'img/아바타-물의길.jpeg' }] },
  { id: 3, title: '스파이더맨: 노 웨이 홈', year: 2021, genre: 'action', rating: 9.10, director: '존 왓츠', runtime: '148분', desc: '‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…', poster: 'img/스파이더맨-노웨이홈.jpg', similar: [{ title: '스파이더맨: 뉴 유니버스', poster: 'img/스파이더맨-뉴유니버스.jpeg'}, { title: '닥터 스트레인지: 대혼돈의 멀티버스', poster: 'img/닥터스트레인지-대혼돈의멀티버스.jpg' }, { title: '스파이더맨 2', poster: 'img/스파이더맨2.jpeg' }, { title: '샹치와 텐 링즈의 전설', poster: 'img/샹치와텐링즈의 전설.jpeg' }, { title: '플래시', poster: 'img/플래시.jpeg'}] },
  { id: 4, title: '닥터 스트레인지: 대혼돈의 멀티버스', year: 2022, genre: 'action', rating: 7.80, director: '샘 레이미', runtime: '126분', desc: '끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….', poster: 'img/닥터스트레인지-대혼돈의멀티버스.jpg', similar: [{ title: '스파이더맨: 노 웨이 홈', poster: 'img/스파이더맨-노웨이홈.jpg'}, { title: '인셉션', poster: 'img/인셉션.jpeg'}, { title: '에브리씽 에브리웨어 올 앳 원스', poster: 'img/에브리씽에브리웨어올앳원스.webp'}, { title: '콘스탄틴', poster: 'img/콘스탄틴.jpeg'}, { title: '닥터스트레인지', poster: 'img/닥터스트레인지.jpeg'}] },
  { id: 5, title: '유열의 음악앨범', year: 2019, genre: 'romance', rating: 8.41, director: '정지우', runtime: '122분', desc: '"오늘 기적이 일어났어요." 1994년 가수 유열이 라디오 DJ를 처음 진행하던 날, 엄마가 남겨준 빵집에서 일하던 미수(김고은)는 우연히 찾아 온 현우(정해인)를 만나 설레는 감정을 느끼게 되지만 뜻하지 않은 사건으로 인해 연락이 끊기게 된다. "그때, 나는 네가 돌아오지 않을 거라고 생각했어. 그래도 기다렸는데…" 다시 기적처럼 마주친 두 사람은 설렘과 애틋함 사이에서 마음을 키워 가지만 서로의 상황과 시간은 자꾸 어긋나기만 한다. 계속되는 엇갈림 속에서도 라디오 ‘유열의 음악앨범’과 함께 우연과 필연을 반복하는 두 사람… 함께 듣던 라디오처럼 그들은 서로의 주파수를 맞출 수 있을까?', poster: 'img/유열의음악앨범.jpg', similar: [{ title: '건축학개론', poster: 'img/건축학개론.jpeg' }, { title: '8월의 크리스마스', poster: 'img/8월의크리스마스.jpeg' }, { title: '클래식', poster: 'img/클래식.webp' }, { title: '청설', poster: 'img/청설.jpeg' }, { title: '20세기 소녀', poster: 'img/20세기소녀.jpeg' }] },
  { id: 6, title: '올드 가드', year: 2020, genre: 'action', rating: 8.20, director: '지나 프린스바이스우드', runtime: '124분', desc: '오랜 시간을 거치며 세상의 어둠과 맞서운 불멸의 존재들이 세계를 수호하기 위해 또다시 힘을 합쳐 위기와 싸워나가는 이야기', poster: 'img/올드가드.jpg', similar: [{ title: '존 윅', poster: 'img/존윅.jpeg' }, { title: '아토믹 블론드', poster: 'img/아토믹블론드.jpeg' }, { title: '익스트랙션: 리벤지', poster: 'img/익스트랙션-리벤지.jpeg' }, { title: '루시', poster: 'img/루시.jpeg' }, { title: '데드풀', poster: 'img/데드풀.jpeg' }] },
  { id: 7, title: '줄무늬 파자마를 입은 소년', year: 2008, genre: 'drama, war', rating: 9.15, director: '마크 허만', runtime: '94분', desc: '나치 장교인 아버지를 따라 베를린에서 폴란드로 이사 온 호기심 많은 8살 소년 브루노는 집 뒤 철조망 너머 ‘농장’이 궁금해진다. 어느 날 철조망을 사이에 두고 만난 줄무늬 파자마를 입은 소년 ‘슈무엘’과 친구가 된 브루노는 사라진 슈무엘의 아빠를 찾기 위해 비밀 작전을 제안하는데…', poster: 'img/줄무늬파자마를입은소년.jpg', similar: [{ title: '인생은 아름다워', poster: 'img/인생은아름다워.jpeg' }, { title: '피아니스트', poster: 'img/피아니스트.jpeg' }, { title: '쉰들러 리스트', poster: 'img/쉰들러리스트.jpeg' }, { title: '조조 래빗', poster: 'img/조조래빗.jpeg' }, { title: '사울의 아들', poster: 'img/사울의아들.jpeg' }] },
  { id: 8, title: '파묘', year: 2024, genre: 'horror, drama', rating: 8.25, director: '장재현', runtime: '134분', desc: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’(김고은)과 ‘봉길’(이도현)은 기이한 병이 대물림되는 집안의 장손을 만난다. 조상의 묫자리가 화근임을 알아챈 ‘화림’은 이장을 권하고, 돈 냄새를 맡은 최고의 풍수사 ‘상덕’(최민식)과 장의사 ‘영근’(유해진)이 합류한다. “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지” 절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘. ‘상덕’은 불길한 기운을 느끼고 제안을 거절하지만, ‘화림’의 설득으로 결국 파묘가 시작되고… 나와서는 안될 것이 나왔다.', poster: 'img/파묘.jpg', similar: [{ title: '곡성', poster: 'img/곡성.jpeg' }, { title: '검은 사제들', poster: 'img/검은사제들.jpeg' }, { title: '사바하', poster: 'img/사바하.jpeg' }, { title: '유전', poster: 'img/유전.jpeg' }, { title: '인시디어스', poster: 'img/인시디어스.jpeg' }] },
  { id: 9, title: '말할 수 없는 비밀', year: 2007, genre: 'romance', rating: 9.28, director: '주걸륜', runtime: '101분', desc: '나는 너를 사랑해!너도 나를 사랑하니? 예술학교로 전학 온 상륜(주걸륜)은 아버지의 영향을 받아 피아노에 천부적인 소질을 보인다. 학교를 둘러보던 중, 신비스러운 피아노 연주가 흘러나오는 옛 음악실을 발견하게 되고, 그곳에서 샤오위(계륜미)를 만난다. 그들은 아름다운 피아노 선율처럼 즐거운 시간을 보내고, 둘 사이에는 애틋한 마음이 싹튼다. 그러나 상륜이 샤오위를 더 알고 싶어할 때마다 그녀는 비밀이라고 일관하며 의미심장한 미소만 짓는다. 그러던 어느 날, 샤오위는 상륜이 같은 반 여학생 칭요와 뽀뽀하는 모습을 보게 되고, 그의 곁에서 사라지는데…', poster: 'img/말할수없는비밀.jpg', similar: [{ title: '너의 이름은', poster: 'img/너의이름은.png' }, { title: '어바웃 타임', poster: 'img/어바웃타임.jpg' }, { title: '이프 온리', poster: 'img/이프온리.jpeg' }, { title: '안녕 나의 소녀시절이여', poster: 'img/안녕나의소녀시절이여.jpeg' }, { title: '시간을 달리는 소녀', poster: 'img/시간을달리는소녀.jpeg' }] },
  { id: 10, title: '생일', year: 2019, genre: 'drama', rating: 8.90, director: '이종언', runtime: '120분', desc: '"2014년 4월 이후... 남겨진 우리들의 이야기" 세상을 먼저 떠난 아들 ‘수호’ 에 대한 그리움을 안고 살아가는 ‘정일’과 ‘순남’의 가족. 어김없이 올해도 아들의 생일이 돌아오고, 가족들의 그리움은 더욱 커져만 간다. 수호가 없는 수호의 생일. 가족과 친구들은 함께 모여 서로가 간직했던 특별한 기억을 선물하기로 하는데.. 1년에 단 하루. 널 위해, 우리 모두가 다시 만나는 날. "영원히 널 잊지 않을게."', poster: 'img/생일.jpg', similar: [{ title: '택시운전사', poster: 'img/택시운전사.jpeg' }, { title: '소원', poster: 'img/소원.jpeg' }, { title: '룸', poster: 'img/룸.jpeg' }, { title: '아무도 모른다', poster: 'img/아무도모른다.jpeg' }, { title: '담보', poster: 'img/담보.jpeg' }] },
  { id: 11, title: '너의 결혼식', year: 2018, genre: 'romance', rating: 9.01, director: '이석근', runtime: '110분', desc: '고3 여름, 전학생 ‘승희’(박보영)를 보고 첫눈에 반한 ‘우연’(김영광). 승희를 졸졸 쫓아다닌 끝에 마침내 공식커플로 거듭나려던 그때! 잘 지내라는 전화 한 통만 남긴 채 승희는 사라져버리고, 우연의 첫사랑은 그렇게 막을 내리는 듯했다. 1년 뒤, 승희의 흔적을 쫓아 끈질긴 노력으로 같은 대학에 합격한 우연. 그런데 그의 앞을 가로막은 건… 다름 아닌 그녀의 남.자.친.구! 예술로 빗나가는 타이밍 속 다사다난한 그들의 첫사랑 연대기는 계속된다!', poster: 'img/너의결혼식.jpg', similar: [{ title: '건축학개론', poster: 'img/건축학개론.jpeg' }, { title: '그 시절 우리가 좋아했던 소녀', poster: 'img/그시절우리가좋아했던소녀.jpeg' }, { title: '나의 소녀시대', poster: 'img/나의소녀시대.jpeg' }, { title: '500일의 썸머', poster: 'img/500일의썸머.jpeg' }, { title: '첫사랑 사수 궐기대회', poster: 'img/첫사랑사수궐기대회.jpeg' }] },
  { id: 12, title: '메리 크리스마스', year: 2005, genre: 'war, drama', rating: 8.85, director: '크리스티앙 카리옹', runtime: '115분', desc: '1914년 제 1차 세계 대전 중 프랑스 북부 독일군 점령지역에선 100m도 안 되는 거리를 사이에 두고 독일, 프랑스, 영국군의 숨 막히는 접전이 일어나고 있었다. 크리스마스 이브 영국군은 백파이프를 연주하며 잠시나마 전장의 긴장을 늦추고 이에 뒤질세라 독일군은 노래로 화답하며, 크리스마스 단 하루를 위한 휴전 협정을 맺는다. 불과 몇 분 전까지만 해도 적이었던 그들은 서로를 향해 겨누던 총을 버리고 ‘메리 크리스마스’를 기원한다. 더 이상 적이 아닌 친구로 변해버린 그들.. 과연 이 전쟁을 계속 할 수 있을까?', poster: 'img/메리크리스마스.jpg', similar: [{ title: '1917', poster: 'img/1917.jpeg' }, { title: '서부 전선 이상 없다', poster: 'img/서부전선이상없다.jpeg' }, { title: '고지전', poster: 'img/고지전.jpeg' }, { title: '덩케르크', poster: 'img/덩케르크.jpeg' }, { title: '피아니스트', poster: 'img/피아니스트.jpeg' }] },
  { id: 13, title: '센과 치히로의 행방불명', year: 2001, genre: 'animation', rating: 9.59, director: '미야자키 하야오', runtime: '126분', desc: '금지된 세계의 문이 열렸다! 이사 가던 날, 수상한 터널을 지나자 인간에게는 금지된 신들의 세계로 오게 된 치히로.. 신들의 음식을 먹은 치히로의 부모님은 돼지로 변해버린다. “걱정마, 내가 꼭 구해줄게…” 겁에 질린 치히로에게 다가온 정체불명의 소년 하쿠. 그의 따뜻한 말에 힘을 얻은 치히로는 인간 세계로 돌아가기 위해 사상 초유의 미션을 시작하는데…', poster: 'img/센과치히로의행방불명.jpg', similar: [{ title: '하울의 움직이는 성', poster: 'img/하울의움직이는성.jpg' }, { title: '이웃집 토토로', poster: 'img/이웃집토토로.jpeg' }, { title: '벼랑 위의 포뇨', poster: 'img/벼랑 위의 포뇨.jpeg' }, { title: '썸머 워즈', poster: 'img/썸머워즈.jpeg' }, { title: '이상한 나라의 앨리스', poster: 'img/이상한나라의앨리스.jpeg' }] },
  { id: 14, title: '너의 이름은', year: 2016, genre: 'animation, romance', rating: 9.02, director: '신카이 마코토', runtime: '106분', desc: '아직 만난 적 없는 너를, 찾고 있어 천년 만에 다가오는 혜성 기적이 시작된다 도쿄에 사는 소년 ‘타키’와 시골에 사는 소녀 ‘미츠하’는 서로의 몸이 뒤바뀌는 신기한 꿈을 꾼다 낯선 가족, 낯선 친구들, 낯선 풍경들... 반복되는 꿈과 흘러가는 시간 속, 마침내 깨닫는다 우리, 서로 뒤바뀐 거야? 절대 만날 리 없는 두 사람 반드시 만나야 하는 운명이 되다 서로에게 남긴 메모를 확인하며 점점 친구가 되어가는 ‘타키’와 ‘미츠하’ 언제부턴가 더 이상 몸이 바뀌지 않자 자신들이 특별하게 이어져있었음을 깨달은 ‘타키’는 ‘미츠하’를 만나러 가는데... 잊고 싶지 않은 사람 잊으면 안 되는 사람 너의 이름은?', poster: 'img/너의이름은.png', similar: [{ title: '날씨의 아이', poster: 'img/날씨의아이.jpeg' }, { title: '스즈메의 문단속', poster: 'img/스즈메의문단속.jpeg' }, { title: '목소리의 형태', poster: 'img/목소리의형태.jpeg' }, { title: '시간을 달리는 소녀', poster: 'img/시간을달리는소녀.jpeg' }, { title: '말할 수 없는 비밀', poster: 'img/말할수없는비밀.jpg' }] },
  { id: 15, title: '하울의 움직이는 성', year: 2004, genre: 'animation', rating: 9.35, director: '미야자키 하야오', runtime: '119분', desc: '어느 날, 영문도 모른 채 마녀의 저주로 인해 할머니가 된 소녀 ‘소피’ 절망 속에서 길을 걷다가 거대한 마법의 성에 들어가게 된다. 그곳에서 자신과 마법사 하울의 계약을 깨주면 저주를 풀어주겠다는 불꽃악마 캘시퍼의 제안을 받고 청소부가 되어 ‘움직이는 성’에 머물게 되는데…', poster: 'img/하울의움직이는성.jpg', similar: [{ title: '센과 치히로의 행방불명', poster: 'img/센과치히로의행방불명.jpg' }, { title: '천공의 성 라퓨타', poster: 'img/천공의성라퓨타.jpeg' }, { title: '마녀 배달부 키키', poster: 'img/마녀배달부키키.jpeg' }, { title: '붉은 돼지', poster: 'img/붉은돼지.jpeg' }, { title: '귀를 귀울이면', poster: 'img/귀를기울이면.jpeg' }] },
  { id: 16, title: '모노노케 히메', year: 1997, genre: 'animation, action', rating: 9.34, director: '미야자키 하야오', runtime: '133분', desc: '태곳적부터 존재한 대자연의 신과 인간이 공존하는 세상. 숲과 산을 짓밟아 터전을 넓히려는 인간의 야욕에 분노해 재앙신으로 변한 멧돼지신에게 맞서 에미시족의 후계자 ‘아시타카’는 죽음의 저주을 입는다. 저주의 근원을 찾아 떠난 ‘아시타카’ 앞에 자연의 편에 선 ‘산’을 만나게 되고, 인간과 자연 사이 공존의 길을 찾고자 하는 ‘아시타카’와 강력한 무기를 앞세워 자연을 정복하려는 타타라 마을의 지도자 ‘에보시’ 까지 갈등에 이르고, 파괴와 공존, 문명과 생명 사이 피할 수 없는 선택의 순간에 다다르는데…! 인간은 자연과 함께 살아갈 수 있을까?', poster: 'img/모노노케히메.jpg', similar: [{ title: '바람계곡의 나우시카', poster: 'img/바람계곡의나우시카.jpeg' }, { title: '천공의 성 라퓨타', poster: 'img/천공의성라퓨타.jpeg' }, { title: '늑대아이', poster: 'img/늑대아이.jpeg' }, { title: '아키라', poster: 'img/아키라.jpeg' }, { title: '게드전기: 어스시의 전설', poster: 'img/게드전기-어스시의전설.jpeg' }] },
  { id: 17, title: '어바웃 타임', year: 2013, genre: 'romance, comedy', rating: 9.30, director: '리차드 커티스', runtime: '123분', desc: '모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다. 바로 시간을 되돌릴 수 있는 능력이 있다는 것! 그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수는 없지만, 여자친구는 만들어 줄 순 있으리.. 꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다. 그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀. 어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이! 꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다. 하지만 그와 그녀의 사랑이 완벽해질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고, 예상치 못한 사건들이 여기저기 나타나기 시작하는데… 어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?', poster: 'img/어바웃타임.jpg', similar: [{ title: '이프 온리', poster: 'img/이프온리.jpeg' }, { title: '노팅힐', poster: 'img/노팅힐.jpeg' }, { title: '미드나잇 인 파리', poster: 'img/미드나잇인파리.jpeg' }, { title: '이터널 선샤인', poster: 'img/이터널선샤인.jpeg' }, { title: '말할 수 없는 비밀', poster: 'img/말할수없는비밀.jpg' }] },
  { id: 18, title: '탑건: 매버릭', year: 2022, genre: 'action', rating: 9.77, director: '조셉 코신스키', runtime: '130분', desc: '최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…', poster: 'img/탑건-매버릭.jpg', similar: [{ title: '포드 V 페라리', poster: 'img/포드V페라리.jpeg' }, { title: '디보션', poster: 'img/디보션.jpeg' }, { title: '인터스텔라', poster: 'img/인터스텔라.jpeg' }, { title: '덩케르크', poster: 'img/덩케르크.jpeg' }, { title: '미션 임파서블: 폴아웃', poster: 'img/미션임파서블-폴아웃.jpeg' }] },
];

const GENRE_LABELS = { 
  action: '액션', 
  romance: '로맨스 / 멜로', 
  drama: '드라마', 
  comedy: '코미디', 
  war: '전쟁', 
  horror: '호러', 
  animation: '애니메이션' 
};

let currentGenre = 'all';
let currentQuery = '';
let currentSort = 'default';
let shownCount = 0;
let filteredMovies = [];

function stars(r) {
  const full = Math.round(r / 2);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function getBadgeClass(genre) { 
  const firstGenre = genre ? genre.split(',')[0].trim() : '';
  return `badge-${firstGenre}`; 
}

function genreLabel(genre) { 
  const firstGenre = genre ? genre.split(',')[0].trim() : '';
  return GENRE_LABELS[firstGenre] || firstGenre; 
}

function sortMovies(arr) {
  const sorted = [...arr];
  switch (currentSort) {
    case 'rating-desc': return sorted.sort((a,b) => b.rating - a.rating);
    case 'rating-asc':  return sorted.sort((a,b) => a.rating - b.rating);
    case 'year-desc':   return sorted.sort((a,b) => b.year   - a.year);
    case 'year-asc':    return sorted.sort((a,b) => a.year   - b.year);
    case 'title-asc':   return sorted.sort((a,b) => a.title.localeCompare(b.title, 'ko'));
    default:            return sorted;
  }
}

function applyFilter() {
  const q = currentQuery.trim().toLowerCase();
  filteredMovies = sortMovies(
    MOVIES.filter(m => {
      const movieGenres = m.genre.split(',').map(g => g.trim());
      const matchGenre = currentGenre === 'all' || movieGenres.includes(currentGenre);
      const matchQuery = !q || m.title.toLowerCase().includes(q);
      return matchGenre && matchQuery;
    })
  );
  shownCount = 0;
  renderCards(true);
  updateLoadMore();
  document.getElementById('totalCount').textContent = filteredMovies.length;
  document.getElementById('heroCount').textContent = String(filteredMovies.length).padStart(2, '0');
}

function renderCards(reset) {
  const grid = document.getElementById('movieGrid');
  const noRes = document.getElementById('noResults');

  if (reset) {
    grid.innerHTML = '';
    grid.appendChild(noRes);
    shownCount = 0;
  }

  if (filteredMovies.length === 0) {
    noRes.classList.add('visible');
    document.getElementById('shownCount').textContent = 0;
    return;
  }
  noRes.classList.remove('visible');

  const width = window.innerWidth;
  let itemsToShow = width > 1024 ? 15 : 6;
  
  const slice = filteredMovies.slice(shownCount, shownCount + itemsToShow);
  slice.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${i * 0.06}s`;
    
    card.innerHTML = `
      <div class="card-poster">
        <img src="${m.poster}" alt="${m.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300/13131a/444?text=No+Image'" />
        <span class="genre-badge ${getBadgeClass(m.genre)}">${genreLabel(m.genre)}</span>
        <div class="card-overlay">
          <div class="overlay-rating">${m.rating}</div>
          <div class="overlay-desc">${m.desc}</div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-meta">
          <span class="card-year">${m.year} · ${m.runtime}</span>
          <span class="card-stars">${stars(m.rating)}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(m));
    grid.appendChild(card);
  });

  shownCount += slice.length;
  document.getElementById('shownCount').textContent = shownCount;
}

function updateLoadMore() {
  const total = filteredMovies.length;
  const pct = total === 0 ? 0 : Math.min((shownCount / total) * 100, 100);
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressLabel').textContent = `${shownCount} / ${total} 편 표시 중`;
  const btn = document.getElementById('loadMoreBtn');
  const wrap = document.getElementById('loadMoreWrap');
  btn.disabled = shownCount >= total;
  wrap.style.display = total === 0 ? 'none' : 'flex';
}

function openModal(m) {
  const modalImg = document.getElementById('modalImg');
  modalImg.src = m.poster;
  modalImg.onerror = () => modalImg.src = 'https://via.placeholder.com/200x300?text=No+Image';

  document.getElementById('modalGenre').textContent = m.genre.split(',').map(g => GENRE_LABELS[g.trim()] || g).join(', ');
  document.getElementById('modalTitle').textContent = m.title;
  document.getElementById('modalMeta').textContent = `${m.year} · ${m.director} · ${m.runtime}`;
  document.getElementById('modalRating').textContent = m.rating;
  document.getElementById('modalStars').textContent = '★'.repeat(Math.round(m.rating / 2)) + '☆'.repeat(5 - Math.round(m.rating / 2));
  document.getElementById('modalDesc').textContent = m.desc;

  const scroll = document.getElementById('similarScroll');
  scroll.innerHTML = '';

  m.similar.forEach(sim => {
    const simTitle = typeof sim === 'object' ? sim.title : sim;
    const foundMovie = MOVIES.find(movie => movie.title === simTitle);
    
    let finalPoster;
    if (typeof sim === 'object' && sim.poster) {
      finalPoster = sim.poster;
    } else if (foundMovie) {
      finalPoster = foundMovie.poster;
    } else {
      finalPoster = `img/${simTitle}.jpg`;
    }

    const card = document.createElement('div');
    card.className = 'sim-card'; 
    
    card.innerHTML = `
      <div class="sim-poster">
        <img src="${finalPoster}" alt="${simTitle}" onerror="this.src='https://via.placeholder.com/100x150/13131a/000?text='">
      </div>
      <div class="sim-title">${simTitle}</div>
      <div class="sim-year">${foundMovie ? (foundMovie.year || '') : ''}</div> 
    `;

    if (foundMovie) {
      card.classList.add('has-data');
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(foundMovie);
      });
    }
    
    scroll.appendChild(card);
  });

  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('searchInput').addEventListener('input', e => {
  currentQuery = e.target.value;
  applyFilter();
});

document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentGenre = btn.dataset.genre;
  applyFilter();
});

document.getElementById('sortSelect').addEventListener('change', e => {
  currentSort = e.target.value;
  applyFilter();
});

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  renderCards(false);
  updateLoadMore();
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('modalBackdrop')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('DOMContentLoaded', () => {
  applyFilter();
});