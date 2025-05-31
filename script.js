// 인기 MCP(서버 관리 패널/호스팅) 예시 데이터
const servers = [
  {
    name: 'Multicraft',
    desc: '가장 널리 사용되는 마인크래프트 서버 관리 패널. 직관적 UI와 다양한 호스팅 지원.',
    address: 'https://www.multicraft.org/',
    info: '웹 기반, 다중 서버 관리, 권한 분리, 플러그인 관리',
    link: 'https://www.multicraft.org/'
  },
  {
    name: 'Pterodactyl',
    desc: '오픈소스 게임 서버 관리 패널. Docker 기반, 강력한 확장성, 무료 사용 가능.',
    address: 'https://pterodactyl.io/',
    info: '오픈소스, Docker, 다양한 게임 지원, 무료',
    link: 'https://pterodactyl.io/'
  },
  {
    name: 'AMP (CubeCoders)',
    desc: '다양한 게임 서버를 손쉽게 관리할 수 있는 통합 패널. 자동 업데이트, 백업 등 지원.',
    address: 'https://cubecoders.com/AMP',
    info: '통합 관리, 자동화, 백업/복구, 다양한 게임 지원',
    link: 'https://cubecoders.com/AMP'
  },
  {
    name: 'McMyAdmin',
    desc: '오래된 전통의 마인크래프트 서버 관리 패널. 간편한 설치와 관리 기능 제공.',
    address: 'https://mcmyadmin.com/',
    info: '간편 설치, 웹 UI, 권한 관리, 백업',
    link: 'https://mcmyadmin.com/'
  },
  {
    name: 'Akliz',
    desc: '마인크래프트 서버 전문 호스팅. 강력한 하드웨어와 직관적인 관리 패널 제공.',
    address: 'https://www.akliz.net/minecraft-server-hosting',
    info: '호스팅, 빠른 지원, 자동 설치, 다양한 플랜',
    link: 'https://www.akliz.net/minecraft-server-hosting'
  },
  {
    name: 'PebbleHost',
    desc: '가성비 좋은 마인크래프트 서버 호스팅. 자동 설치와 다양한 패널 기능 제공.',
    address: 'https://pebblehost.com/',
    info: '저렴한 가격, 자동 설치, 다양한 패널 기능',
    link: 'https://pebblehost.com/'
  },
  {
    name: 'Shockbyte',
    desc: '글로벌 인기 마인크래프트 서버 호스팅. 쉬운 관리와 24/7 지원.',
    address: 'https://shockbyte.com/',
    info: '글로벌, 24/7 지원, 자동 설치, 다양한 플랜',
    link: 'https://shockbyte.com/'
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
      <div class="server-info">${server.info}</div>
      <a class="server-link" href="${server.link}" target="_blank">공식 사이트 바로가기</a>
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
