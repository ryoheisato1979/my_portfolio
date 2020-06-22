<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
</head>

<body>
  <?php
  mb_language("Japanese");
  mb_internal_encoding("UTF-8");
  $to = "info@satoryo.net";
  $name = $_POST['name'];
  $content = $_POST['tel'] . $_POST['content'];
  $from = $_POST['email'];
  if (!empty($from) && !empty($name) && !empty($content)) {
    mb_send_mail($to, $name, $content, $from, $tel);
    header("Location: index.html");
    echo "メールを送信しました";
    header("Location: index.html");
    exit;
  } else {
    echo "メールの送信に失敗しました";
    header("Location: index.html");
    exit;
  };

  ?>
</body>

</html>