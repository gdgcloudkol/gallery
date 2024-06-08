const Header = ({ title, id }: { title: string; id: string }) => {
  return (
    <nav className='w-full border-b p-6 sticky top-0 z-20 bg-background shadow-sm flex items-center justify-between'>
      <div className='flex flex-wrap items-center gap-4'>
        <img
          src='/assets/images/full_colored.svg'
          alt='GDG cloud kolkata'
          className='w-52 max-w-sm h-auto'
        />
        <h1>
          {!title.toLowerCase().includes("dynamic link not found") && title}
        </h1>
      </div>
      {id && (
        <a
          href={process.env.GAL_API + id}
          target='_blank'
          className='hidden md:inline-flex text-blue-400 hover:underline'
        >
          Album
        </a>
      )}
    </nav>
  );
};

export default Header;
