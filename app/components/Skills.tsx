import skills from "@/constants/skills"

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-t from-black via-zinc-950 to-zinc-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center text-blue-500 mb-4">{skill.icon}</div>
                  <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Skills