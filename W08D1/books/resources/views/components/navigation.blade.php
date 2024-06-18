<nav>
    <a href="{{route('home')}}" class="{{ $current_page == 'index' ? 'highlighted' : '' }}">Home</a>
    <a href="{{route('about')}}" class="{{ $current_page == 'about-us' ? 'highlighted' : '' }}">About</a>
    <a href="{{route('admin.authors.index')}}" class="{{ $current_page == 'authors.index' ? 'highlighted' : '' }}">Authors
        list</a>
    <a href="{{route('admin.authors.create')}}" class="{{ $current_page == 'authors.create' ? 'highlighted' : '' }}">Add
        new author</a>
    <a href="{{route('admin.books.index')}}" class="{{ $current_page == 'books' ? 'highlighted' : '' }}">Books list</a>
    <a href="{{route('admin.books.create')}}" class="{{ $current_page == 'books.create' ? 'highlighted' : '' }}">Add new
        book</a>
    <a href="{{route('latest')}}" class="{{ $current_page == 'latest' ? 'highlighted' : '' }}">Latest books</a>
    <a href="{{route('admin.books.crime')}}" class="{{ $current_page == 'crime' ? 'highlighted' : '' }}">Crime books</a>

    @guest
        <a href="{{route('login')}}" class="{{ $current_page == 'login' ? 'highlighted' : '' }}">Login page</a>
        <a href="{{route('register')}}" class="{{ $current_page == 'register' ? 'highlighted' : '' }}">Register page</a>
    @endguest
    @auth
        <form action="{{ route('logout') }}" method="post">
            @csrf
            <button>Logout</button>
        </form>
    @endauth
</nav>
