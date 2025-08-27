import { motion } from 'framer-motion'
import { User, Code, Heart, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: '프로젝트 완료', value: '20+' },
    { icon: User, label: '만족한 클라이언트', value: '15+' },
    { icon: Heart, label: '개발 경력', value: '3년' },
    { icon: Target, label: '목표 달성률', value: '95%' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            저에 대해 알아보세요
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            열정적인 개발자로서 사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full blur-xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  개발자
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                안녕하세요! 저는 [이름]입니다
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                백엔드 개발자로서 3년간 다양한 프로젝트를 통해 안정적이고 확장 가능한 
                서버 시스템을 구축해왔습니다. Node.js, Python, 그리고 최신 백엔드 기술에 
                대한 깊은 이해를 바탕으로 효율적이고 안전한 API와 데이터베이스 설계를 제공합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                코드의 품질과 시스템 성능을 최우선으로 생각하며, 지속적인 학습과 새로운 
                기술 습득에 대한 열정을 가지고 있습니다. 팀워크를 중시하며, 협업을 통해 
                더 나은 백엔드 시스템을 만들어내는 것을 즐깁니다.
              </p>
            </div>

            {/* Skills Preview */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                주요 기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              함께 일해보기
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
