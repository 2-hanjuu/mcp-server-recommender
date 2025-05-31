// 인기 MCP 서버 예시 데이터
const servers = [
  {
    name: '마인리스트',
    desc: '국내 최대 마인크래프트 서버 커뮤니티. 다양한 서버와 리뷰, 추천 시스템 제공.',
    address: 'https://minelist.kr',
    info: '서바이벌, 창작, RPG, 미니게임 등 다양한 장르',
    link: 'https://minelist.kr/'
  },
  {
    name: 'MCPC',
    desc: '한국 대표 마인크래프트 커뮤니티. 서버 홍보, 자료실, 유저 커뮤니티 제공.',
    address: 'https://mcpc.kr',
    info: '서버 홍보, 커뮤니티, 자료실, 이벤트',
    link: 'https://mcpc.kr/'
  },
  {
    name: '마인팜',
    desc: '오랜 역사의 마인팜 서버. 경제, 농장, 다양한 컨텐츠와 친절한 운영진.',
    address: 'play.minefarm.kr',
    info: '경제, 파밍, 커뮤니티, 이벤트',
    link: 'https://minefarm.kr/'
  },
  {
    name: '마인플렉스 (Mineplex)',
    desc: '글로벌 인기 미니게임 서버. 다양한 게임모드와 대규모 유저.',
    address: 'us.mineplex.com',
    info: '미니게임, 글로벌, 영어지원',
    link: 'https://www.mineplex.com/'
  },
  {
    name: '하이픽셀 (Hypixel)',
    desc: '세계 최대 마인크래프트 서버. 다양한 게임모드와 방대한 컨텐츠.',
    address: 'mc.hypixel.net',
    info: '미니게임, 글로벌, 영어지원, 랭킹',
    link: 'https://hypixel.net/'
  }
];

function renderServers(list) {
  const container = document.getElementById('server-list');
  container.innerHTML = '';
  list.forEach(server => {
    const card = document.createElement('div');
    card.className = 'server-card';
    card.innerHTML = `
      <div class="server-title">${server.name}</div>
      <div class="server-desc">${server.desc}</div>
      <div class="server-info">주소: ${server.address} | ${server.info}</div>
      <a class="server-link" href="${server.link}" target="_blank">서버 바로가기</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById('search').addEventListener('input', function(e) {
  const q = e.target.value.trim().toLowerCase();
  renderServers(
    servers.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.info.toLowerCase().includes(q)
    )
  );
});

// 초기 렌더링
renderServers(servers);
