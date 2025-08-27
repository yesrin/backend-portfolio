import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Zap,
  Shield
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: '백엔드 개발',
      icon: Code,
      skills: [
        { name: 'Node.js', level: 95, color: 'from-green-600 to-green-700' },
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Express.js', level: 90, color: 'from-gray-600 to-gray-700' },
        { name: 'Django', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'FastAPI', level: 80, color: 'from-blue-400 to-blue-500' },
      ]
    },
    {
      title: '데이터베이스',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90, color: 'from-blue-400 to-blue-500' },
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Redis', level: 80, color: 'from-red-500 to-red-600' },
        { name: 'MySQL', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'Elasticsearch', level: 70, color: 'from-yellow-500 to-orange-500' },
      ]
    },
    {
      title: '클라우드 & DevOps',
      icon: Zap,
      skills: [
        { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'Kubernetes', level: 70, color: 'from-blue-600 to-blue-700' },
        { name: 'CI/CD', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Linux', level: 90, color: 'from-gray-600 to-gray-700' },
      ]
    },
    {
      title: 'API & 보안',
      icon: Shield,
      skills: [
        { name: 'REST API', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'GraphQL', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'JWT', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'OAuth', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'API Security', level: 85, color: 'from-red-500 to-red-600' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            기술 스택
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            다양한 기술을 활용하여 최고의 사용자 경험을 제공합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            기타 기술 & 도구
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'TypeScript', 'GraphQL', 'REST API', 'Jest', 'Mocha',
              'Webpack', 'Babel', 'ESLint', 'Prettier', 'Swagger', 'Socket.io',
              'Microservices', 'Message Queues', 'WebSockets', 'JWT', 'OAuth', 'Stripe',
              'Firebase', 'Supabase', 'Redis', 'Elasticsearch', 'Kubernetes', 'Jenkins'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-3 bg-white dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-dark-600 text-center hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
