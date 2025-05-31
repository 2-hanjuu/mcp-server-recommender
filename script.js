// MCP(Model Context Protocol) 관련 리소스 예시 데이터
const resources = [
  {
    name: 'Model Context Protocol 공식 문서',
    desc: 'MCP 표준의 공식 명세와 API 문서. 모델 컨텍스트 관리와 통신을 위한 표준안.',
    info: '공식, 표준 문서, API',
    link: 'https://github.com/modelcontext/protocol'
  },
  {
    name: 'OpenAI MCP 지원 안내',
    desc: 'OpenAI에서 제안하는 MCP 지원 및 활용 사례, 개발자 가이드.',
    info: 'OpenAI, 가이드, 활용법',
    link: 'https://platform.openai.com/docs/mcp'
  },
  {
    name: 'Huggingface MCP Integration',
    desc: 'Huggingface Transformers에서 MCP를 활용하는 방법과 예제 코드.',
    info: 'Huggingface, Transformers, 예제',
    link: 'https://huggingface.co/docs/transformers/main/en/mcp'
  },
  {
    name: 'LangChain MCP Extension',
    desc: 'LangChain 프레임워크에서 MCP를 통한 컨텍스트 관리 확장 기능.',
    info: 'LangChain, 확장, Python',
    link: 'https://python.langchain.com/docs/integrations/mcp'
  },
  {
    name: 'MCP 커뮤니티 포럼',
    desc: 'MCP 및 AI 모델 표준 관련 논의, Q&A, 최신 동향 공유 커뮤니티.',
    info: '커뮤니티, 토론, Q&A',
    link: 'https://community.modelcontext.org/'
  },
  {
    name: 'arXiv: Model Context Protocol 논문',
    desc: 'MCP의 개념, 설계, 적용 사례를 다룬 논문(arXiv).',
    info: '논문, arXiv, 이론',
    link: 'https://arxiv.org/abs/2401.12345'
  }
];

function renderResources(list) {
  const container = document.getElementById('resource-list');
  container.innerHTML = '';
  list.forEach(res => {
    const card = document.createElement('div');
    card.className = 'server-card';
    card.innerHTML = `
      <div class="server-title">${res.name}</div>
      <div class="server-desc">${res.desc}</div>
      <div class="server-info">${res.info}</div>
      <a class="server-link" href="${res.link}" target="_blank">바로가기</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById('search').addEventListener('input', function(e) {
  const q = e.target.value.trim().toLowerCase();
  renderResources(
    resources.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q) ||
      r.info.toLowerCase().includes(q)
    )
  );
});

// 초기 렌더링
renderResources(resources);
