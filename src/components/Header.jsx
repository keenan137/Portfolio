import Container from './ui/container';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {

    const routes = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/",
            label: "About"
        },
    ];

    return (
        <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
            <Container>
                <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 item-center justify-between w-full'>
                    <div className='flex items-center'>
                        <h1 className='ml-4 lg:ml-0 text-xl'>Full-Stack Web Developer</h1>
                    </div>

                    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block'>
                        {routes?.map((route, index) => {
                            <Button asChild variant="ghost">
                                <Link
                                    key={index}
                                    href={route.href}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        })}
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header