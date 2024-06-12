<ul>{{$employer_name}} is looking for
@foreach($offers_of_employer as $offer)
        <li>{{$offer->content}}</li>
@endforeach

</ul>
