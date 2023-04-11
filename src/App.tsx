import {useTheme} from './theme-context'
import resume from '/Gonzalo_Stoll_2023.pdf'

export default function App() {
  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
      <header className="flex flex-wrap">
        <h1 className="mr-auto">Gonzalo Stoll</h1>
        <ThemeSwitch />
      </header>
      <main className="mb-8 mt-20">
        <h2 className="mb-20 text-5xl font-bold md:text-6xl">
          Hi! My name is Gonzalo, and I'm a Frontend Engineer based in
          Copenhagen, Denmark.
        </h2>
        <h3 id="Skills" className="font-bold">
          Skills
        </h3>
        <ul aria-labelledby="Skills" className="sc-hKMtZM eIDMHW">
          <li>React</li>
          <li>TypeScript</li>
          <li>React Query</li>
          <li>Jest</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Accessibility</li>
        </ul>
      </main>
      <footer className="items-end justify-between md:flex">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">
            Interesting in working together?
          </h3>
          <h3 className="text-2xl font-bold">
            ↳ Contact me{' '}
            <a
              aria-label="Contact me here"
              href="mailto:stollgonzalo@gmail.com"
              className="hover:underline"
            >
              here
            </a>
          </h3>
        </div>
        <ul>
          <li className="mr-4 inline-block">
            <a
              href={resume}
              aria-label="Download my resume"
              target="_blank"
              rel="noreferrer"
            >
              ↳ Resume
            </a>
          </li>
          <li className="mr-4 inline-block">
            <a href="https://www.linkedin.com/in/gonzalostoll/">Linkedin</a>
          </li>
          <li className="mr-4 inline-block">
            <a href="https://github.com/gonstoll/">Github</a>
          </li>
          <li className="inline-block">
            <a href="https://medium.com/@gonstoll">Medium</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

function ThemeSwitch() {
  const {theme, toggleTheme} = useTheme()

  return (
    <label className="flex items-center md:ml-20" htmlFor="theme-toggle">
      <div
        className="peer-group h-6 w-10 rounded-2xl border border-solid border-black p-1 dark:border-white"
      >
        <input
          id="theme-toggle"
          role="switch"
          type="checkbox"
          className="peer sr-only"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label={theme === 'dark' ? 'Dark mode' : 'Light mode'}
        />
        <div className="peer-checked:before:translate-x-toggle-checked relative h-full w-full cursor-pointer before:absolute before:left-0 before:top-1/2 before:h-4 before:w-4 before:-translate-y-1/2 before:rounded-full before:bg-black before:transition-transform before:duration-500 dark:before:bg-white" />
      </div>
    </label>
  )
}
