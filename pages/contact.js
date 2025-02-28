import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const Contact = () => {
  const { theme } = useTheme()
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const contactLinks = [
    {
      name: 'Email',
      href: 'mailto:sidharthsingh714@gmail.com',
      icon: FiMail,
      username: 'sidharthsingh714@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Sidharth-Singh10',
      icon: FiGithub,
      username: 'Sidharth-Singh10',
      color: theme === 'dark' ? '#fff' : '#333'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/sid10singh',
      icon: FiTwitter,
      username: 'sid10singh',
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sidharth-singh-a14414285/',
      icon: FiLinkedin,
      username: 'Sidhath Singh',
      color: '#0A66C2'
    }
  ]

  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="Get in touch with me" />
      <div className="mx-auto max-w-4xl  py-8">
        <motion.h1 
          className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out through any of these platforms.
        </motion.p>
        
        <motion.div 
          className="mt-12 grid gap-8 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:hover:border-gray-600"
              whileHover={{ 
                scale: 1.03,
                borderColor: link.color,
                boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)` 
              }}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay:0.01 }}
            >
              <div className="mr-4 rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <link.icon 
                  size={24} 
                  color={hoveredIcon === index ? link.color : 'currentColor'} 
                  className="transition-colors duration-300"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{link.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{link.username}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
       
      </div>
    </>
  )
}

export default Contact