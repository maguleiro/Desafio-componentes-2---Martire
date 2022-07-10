/*
const NavBar = ({ name })=>{
	const displayName = name.toUpperCase();
	return (<nav className="nav">
				<div class="nav__menu">
					<a href="index.html" class="nav__logo">{displayName}</a>
					<a href="productos.html" className="nav__item">Productos</a>
					<a href="regalos.html" className="nav__item">Contacto</a>
					<a href="contacto.html" className="nav__item">Nosotros</a>
					<a href="nosotros.html" className="nav__item">Mas...</a>
				</div>	
		</nav>
		);
};

----------------------------------------
import React, {Component} from 'react';

class NavBar extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const displayName = this.props.name.toUpperCase();
		return(
		<nav className="nav">
				<div class="nav__menu">
					<a href="index.html" class="nav__logo">{displayName}</a>
					<a href="index.html" className="nav__item">Productos</a>
					<a href="index.html" className="nav__item">Contacto</a>
					<a href="index.html" className="nav__item">Nosotros</a>
					<a href="index.html" className="nav__item">Mas...</a>
				</div>	
		</nav> );
	}
}
export default NavBar;
--------------------------------------

*/

import EstiloTexto from "./EstiloTexto"
;
const NavBar = ({ name }) => {
	const navItems = ["Productos","Contacto","Nosotros","Mas"];
	const toUpperNavElements = (text) =>{
		return text.toUpperCase();
	};
	const navItemsStyled = navItems.map(item => (toUpperNavElements(item)) )
	console.log(navItemsStyled);
	const displayName = name.toUpperCase();
	return (
		<>
		<nav className="nav">
			<div class="nav__menu">
				<a href="index.html" class="nav__logo">{displayName}</a>
				{navItemsStyled.map( (item) => {
					return <EstiloTexto text={item} />
				})}

				{/*<EstiloTexto text={navItemsStyled[0]}/>
				<EstiloTexto text={navItemsStyled[1]}/>
				<EstiloTexto text={navItemsStyled[2]}/>
				<EstiloTexto text={navItemsStyled[3]}/>*/}
			</div>
		</nav>
		</>
 );
};

export default NavBar;