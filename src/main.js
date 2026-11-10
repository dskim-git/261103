import './style.css'

const year = document.querySelector('#year')
if (year) year.textContent = new Date().getFullYear()

const topics = {
  story: {
    title: '질문에서 시작하는 수학',
    summary: '학생이 직접 만지고 발견하는 수업을 만들며, 수학과 새로운 배움의 가능성을 잇습니다.',
    points: [
      '수학을 자기만의 방식으로 생각하도록 돕습니다.',
      '수업과 연구를 연결해 배움의 경험을 설계합니다.',
    ],
  },
  interests: {
    title: '수학을 넓히는\n세 가지 관심',
    summary: '학생의 호기심이 깊은 탐구로 이어지도록 수학과 기술을 함께 살핍니다.',
    points: [
      '동료와 함께 배우는 수학교육',
      'AI와 디지털 도구를 활용한 수학',
      '학생의 잠재력을 키우는 영재교육',
    ],
  },
  school: {
    title: '휘문고등학교의 수학 교사',
    summary: '현재 휘문고등학교에서 학생들과 수학을 탐구합니다.',
    points: [
      '공통수학, 확률과 통계, 경제수학',
      '소규모테마여행 담당',
    ],
  },
  activity: {
    title: '교실 밖에서도 이어지는 교육',
    summary: '교육 현장과 함께 영재교육, 미래 수학교육, 생활교육 활동을 이어왔습니다.',
    points: [
      '서울시교육청 융합과학교육원 및 강남서초 중등영재교육원 강사',
      '미래수학교육지원단, 생활교육현장지원단',
      'AIEDAP 마스터교원',
    ],
  },
  projects: {
    title: '수업에서 이어지는 연구',
    summary: 'AI와 디지털 수학을 교실에서 실천하고, 배움에 도움이 되는 방법을 연구합니다.',
    points: [
      '교내 AI 특색 프로그램 AILab 운영',
      '2026 서울형 교원 AI·디지털 리터러시 진단 체계 개발 연구 참여',
      '2026 AIEDAP 수도권역 모형개발 수업실천 연구 참여',
      '서울대학교 AI융합교육학과 석사과정',
    ],
  },
  contact: {
    title: '함께 이야기 나눠요',
    summary: '수업과 연구에 관한 대화, 함께할 프로젝트 제안을 기다립니다.',
    points: [],
    links: true,
  },
}

const detail = document.querySelector('#topic-detail')
const title = detail?.querySelector('.detail-title')
const summary = detail?.querySelector('.detail-summary')
const list = detail?.querySelector('.detail-list')
const links = detail?.querySelector('.detail-links')
const hint = detail?.querySelector('.detail-hint')
const topicNodes = [...document.querySelectorAll('[data-topic]')]
const connectionPaths = [...document.querySelectorAll('[data-path]')]

topicNodes.forEach((node) => {
  node.addEventListener('click', (event) => {
    event.preventDefault()
    const topic = topics[node.dataset.topic]
    if (!topic || !detail || !title || !summary || !list || !links) return

    topicNodes.forEach((item) => {
      item.removeAttribute('aria-current')
    })
    node.setAttribute('aria-current', 'location')
    connectionPaths.forEach((path) => {
      path.classList.toggle('is-active', path.dataset.path === node.dataset.topic)
    })

    title.textContent = topic.title
    summary.textContent = topic.summary
    list.replaceChildren(...topic.points.map((point) => {
      const item = document.createElement('li')
      item.textContent = point
      return item
    }))
    list.hidden = topic.points.length === 0
    links.hidden = !topic.links
    if (hint) hint.hidden = topic.links
  })
})
