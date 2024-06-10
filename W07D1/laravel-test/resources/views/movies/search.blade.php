@if (isset($films))
<h1>Referenced films:</h1>
<ol>
    @foreach ($films as $film)
    <li>
        <ul>
            @foreach ($film as $key=>$value)
            <li>{{$key}}: {{$value}}</li>
            @endforeach
    </li>
    </ul>
    @endforeach
</ol>
@else
<form action="http://www.laravel.test/movies/search?">
    <label for="search-input">Insert key</label>
    <input type="text" name="search" id="search-input">
    <button type="submit">Search</button>
</form>

@endif
