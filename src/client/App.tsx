import { createResource, type Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  const [json] = createResource(() => fetch('/api').then((res) => res.json()))
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt='logo' />
        <p>
          Edit <code>src/client/App.tsx</code> and save to reload.
        </p>
        <a class={styles.link} href='https://github.com/solidjs/solid' target='_blank' rel='noopener noreferrer'>
          Learn Solid
        </a>
        <br />
        <code>{JSON.stringify(json())}</code>
      </header>
    </div>
  )
}

export default App
