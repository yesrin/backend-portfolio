export type Project = {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  velogUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-api',
    title: 'E-커머스 API 서버',
    description:
      'Java와 Springboot를 활용한 RESTful API 서버. 결제 시스템, 사용자 인증, 상품 관리, 주문 처리 기능을 포함합니다.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Stripe', 'JWT'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yesrin',
    featured: true,
    velogUrl: 'https://velog.io/@YOUR_VELOG/ecommerce-api',
  },
  {
    slug: 'realtime-chat-server',
    title: '실시간 채팅 서버',
    description:
      'Socket.io를 활용한 실시간 채팅 서버. 그룹 채팅, 파일 업로드, 메시지 저장, 사용자 관리 기능을 제공합니다.',
    image:
      'https://images.unsplash.com/photo-1526378722488-bd91ca387e72?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS S3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    velogUrl: 'https://velog.io/@YOUR_VELOG/realtime-chat',
  },
  {
    slug: 'microservices-architecture',
    title: '마이크로서비스 아키텍처',
    description:
      'Docker와 Kubernetes를 활용한 마이크로서비스 시스템. 사용자 서비스, 상품 서비스, 주문 서비스로 분리된 구조입니다.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    velogUrl: 'https://velog.io/@YOUR_VELOG/microservices-arch',
  },
  {
    slug: 'data-analytics-api',
    title: '데이터 분석 API',
    description:
      'Python FastAPI를 활용한 데이터 분석 API. 대용량 데이터 처리, 통계 분석, 시각화 데이터 제공 기능을 포함합니다.',
    image:
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Pandas', 'NumPy'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    velogUrl: 'https://velog.io/@YOUR_VELOG/fastapi-analytics',
  },
  {
    slug: 'auth-system',
    title: '인증 시스템',
    description:
      'JWT와 OAuth를 활용한 보안 인증 시스템. 소셜 로그인, 2단계 인증, 권한 관리 기능을 제공합니다.',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Express.js', 'JWT', 'OAuth', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    velogUrl: 'https://velog.io/@YOUR_VELOG/auth-system',
  },
  {
    slug: 'file-upload-service',
    title: '파일 업로드 서비스',
    description:
      'AWS S3를 활용한 파일 업로드 및 관리 서비스. 이미지 리사이징, 파일 압축, CDN 연동 기능을 포함합니다.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'AWS S3', 'Sharp', 'Multer', 'CloudFront'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    velogUrl: 'https://velog.io/@YOUR_VELOG/file-upload',
  },
]
