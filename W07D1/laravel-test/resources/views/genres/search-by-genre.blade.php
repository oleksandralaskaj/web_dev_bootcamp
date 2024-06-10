<?php ?>
@if (isset($films))
<h1>Films in genre of {{$selected_genre}}:</h1>
<ol>
    @foreach ($films as $film)
    <li>
        {{$film->name}}
    </li>
    @endforeach
</ol>
@else
<form action="http://www.laravel.test/genres/search-by-genre?">
    <label for="search-input">Insert key</label>
    <select type="text" name="selected_genre" id="search-input">
        @foreach ($genres as $genre)
        <option value="{{ $genre->name }}" >{{$genre->name}}</option>
        @endforeach
    </select>
    <button type="submit">Search</button>
</form>

@endif
