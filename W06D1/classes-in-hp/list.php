<?php
require "DBBlackbox.php";
require "./Audio-track.php";

$tracks = select(null, null, 'AudioTrack');

?>

<?php foreach ($tracks as $track) : ?>
    <p><?= $track->title ?></p>
<?php endforeach; ?>