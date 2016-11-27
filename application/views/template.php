<html>
    <head>
        <!-- http://getbootstrap.com/ -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        
        <link href="/css/styles.css" rel="stylesheet"/>
        
        <!-- https://jquery.com/ -->
        <!-- <script src="/js/jquery-1.11.3.min.js"></script> -->

        <!-- http://getbootstrap.com/ -->
        <!-- <script src="/js/bootstrap.min.js"></script> -->

        <!-- <script src="/js/scripts.js"></script> -->
        
        <title>CodeIgniter Tutorial</title>
    </head>
    <body>
        <div class="container">
            <div id="top">
                <ul class="nav nav-pills">
                    <li><a href = "/">Home</a></li>
                <?php if (!isset($logged)): ?>
                    <li><a href = "/index.php/users/login/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a href = "/index.php/users/edit/">Register</a></li>
                <?php endif ?>
                <?php if (isset($logged)): ?>
                    <li><a href = "/index.php/requests/">Requests</a></li>
                    <li><a href = "/index.php/users/">Users List</a></li>
                    <li><a>Welcome, <strong><?= $username; ?></strong></a></li>
                    <li><a href = "/index.php/users/logout/"><span class="glyphicon glyphicon-log-out"></span><strong> Log Out</strong></a></li>
                <?php endif ?>
                </ul>
            </div>
            <div id="middle">
                <h1><?= $title; ?></h1>
                <?php $this->load->view($inner_view) ?>
            </div>
            <?php print_r($this->session->userdata('logged_in')); ?>
            <div id="bottom">
                <em>&copy; BrainBasket Kramatorsk 2016-2017</em>
            </div>
        </div>
    </body>
</html>