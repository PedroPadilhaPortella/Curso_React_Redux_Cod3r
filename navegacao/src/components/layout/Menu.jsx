import './Menu.css'

export default function Menu() {
  return (
    <aside className='Menu'>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/param/1">Param com id 1</a></li>
          <li><a href="/param/2">Param com id 2</a></li>
          <li><a href="/not-found">Not Found</a></li>
        </ul>
      </nav>
    </aside>
  );
}