<nav>
    <a href="{{route('home')}}" class="{{ $current_page == 'index' ? 'highlighted' : '' }}">Home</a>
    <a href="{{route('about')}}" class="{{ $current_page == 'about-us' ? 'highlighted' : '' }}">About</a>
    <a href="{{route('admin.authors')}}" class="{{ $current_page == 'authors' ? 'highlighted' : '' }}">Authors list</a>
    <a href="{{route('admin.author.create')}}" class="{{ $current_page == 'author.create' ? 'highlighted' : '' }}">New author</a>
</nav>
