import { useParams, Link } from 'react-router-dom'
import { Github, ExternalLink, ArrowLeft, BookOpen } from 'lucide-react'
import { projects } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">프로젝트를 찾을 수 없습니다.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-900 dark:to-dark-800">
      <Header />
      <main className="section-padding">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-6">
            <ArrowLeft size={18} /> 뒤로가기
          </Link>

          <div className="card">
            <div className="grid md:grid-cols-2 gap-6">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold mb-3">{project.title}</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                      <ExternalLink size={18} /> 라이브 보기
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {project.velogUrl && (
                    <a href={project.velogUrl} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
                      <BookOpen size={18} /> Velog 글 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail
