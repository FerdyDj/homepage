export default function MySkill() {
  return (
    <div>
      <div className="p-4 my-16 w-[100%] flex justify-center">
        <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
      </div>
      <div className="flex w-[100%] justify-center gap-1 my-3 mb-48">
        <ul className="list-disc text-gray-700 w-[450px]">
          <li>
            <span className="font-bold">Frontend Development:</span> HTML5,
            CSS3, JavaScript, Typescript, React.js, Next.js
          </li>
          <li>
            <span className="font-bold">Backend Development:</span> Node.js,
            Express.js
          </li>
          <li>
            <span className="font-bold">Databases:</span> MongoDB, PostgreSQL,
            MySQL
          </li>
          <li>
            <span className="font-bold">Version Control:</span> Git, GitHub,
            GitLab
          </li>
          <li>
            <span className="font-bold">API Development:</span> RESTful APIs,
            Postman
          </li>
          <li>
            <span className="font-bold">DevOps & Tools:</span> VS Code, NPM,
            Bootstrap, Tailwind CSS
          </li>
        </ul>
      </div>
    </div>
  );
}
