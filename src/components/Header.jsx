import Container from './ui/container'

function Header() {
    return (
        <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
            <Container>
                <div className='relative px-4 sm:px-6 lg:px-8 flex h-10 item-center justify-between w-full'>
                    <div className='flex items-center'>
                        <h1 className='ml-4 lg:ml-0 text-xl'>Full-Stack Web Developer</h1>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header