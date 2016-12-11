<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        
        <link href="/css/styles.css" rel="stylesheet"/>
        
        <!-- https://jquery.com/ -->
        <!-- <script src="/js/jquery-1.11.3.min.js"></script> -->

        <script src="/js/script.js"></script>
        
        <title><?= isset($title) ? $title : 'Панель Администратора'?></title>
    </head>
    <body>
        <div class="container">
            <div id="top">
                <ul class="nav nav-pills">
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/users/edit">Register</a></li>
                <?php if (!isset($logged_in)): ?>
                    <li><a href = "/"><span class="glyphicon glyphicon-log-in"></span>&nbsp;Login</a></li>
                <?php endif ?>
                <?php if (isset($logged_in)): ?>
                    <li><a href = "/backend/manage/requests"><span class="glyphicon glyphicon-question-sign"></span>&nbsp;Requests</a></li>
                    <li><a href = "/backend/manage/users">Users List</a></li>
                    <li><a><span class="glyphicon glyphicon-user"></span>&nbsp;<strong><?= $logged_in['username']; ?></strong></a></li>
                    <li><a href = "/backend/users/admin_logout"><span class="glyphicon glyphicon-log-out"></span><strong>&nbsp;Log Out</strong></a></li>
                <?php endif ?>
                </ul>
            </div>
            <div id="middle">
                <h1><?= $title; ?></h1>
                <?php $this->load->view($inner_view) ?>
            </div>
            <?php print_r($this->session->userdata('logged_in')); ?>
            <div id="bottom">
                <em>&copy; BrainBasket Kramatorsk 2016&ndash;2017</em>
            </div>
        </div>
    </body>
</html>