import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/blogs">Blogs</Link>
					</li>
					<li>
						<Link to="/blogs2">Blogs 2</Link>
					</li>
					<li>
						<Link to="/blogs3">Blogs 3</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
