<?php echo validation_errors(); ?>

<?php echo form_open('users/login'); ?>
    <fieldset>
        <div class="form-group">
            <input autocomplete="on" autofocus class="form-control" name="email" placeholder="Email" type="text"/>
        </div>
        <div class="form-group">
            <input class="form-control" name="password" placeholder="Password" type="password"/>
        </div>
        <div class="form-group">
            <button class="btn btn-default" type="submit">
                <span aria-hidden="true" class="glyphicon glyphicon-log-in"></span>
                Log In
            </button>
        </div>
    </fieldset>
</form>
<div>
    or <a href="/index.php/users/edit/">register</a> for an account
</div>