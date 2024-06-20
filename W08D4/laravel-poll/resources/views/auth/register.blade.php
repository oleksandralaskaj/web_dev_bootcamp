@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
<h1>Register page</h1>
<form action="{{ route('register') }}" method="post">

    @csrf
    Name:
    <input type="text" name="name" value="{{ old('name') }}"><br>
    Email:
    <input type="email" name="email" value="{{ old('email') }}"><br>
    Password:
    <input type="password" name="password" value=""><br>
    Password again:
    <input type="password" name="password_confirmation" value=""><br>

    <button>Register</button>

</form>
