import React from 'react';
import style from './Menu.module.css';
import {Link} from 'react-router-dom';
const menu = () => {
return (
<>
<div className={style.menu}>
<div class="linha">
<header>
<div class="coluna col4">
<h1 className={style.logo}>Matheus Victor</h1>
</div>
<div class="coluna col8">
<nav>
<ul class="menu inline sem-marcador">
<li><Link to="/">home</Link></li>
<li><Link to="/cliente">cliente</Link></li>
<li><Link to="/servico">servico</Link></li>
<li><Link to="/sobre">sobre</Link></li>
<li><Link to="/contato">contato</Link></li>
</ul>
</nav>
</div>
</header>
</div>
</div>
</>
)
}
export default menu;
