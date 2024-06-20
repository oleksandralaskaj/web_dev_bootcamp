<nav>
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
