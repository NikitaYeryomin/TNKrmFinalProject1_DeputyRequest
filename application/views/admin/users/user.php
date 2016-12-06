<?php echo validation_errors(); ?>

<?php echo form_open('users/edit/'.$user['userid']); ?>
<fieldset>
    <legend>Имя пользователя:</legend>
    <div class="form-group">
        <input type="input" class="form-control" name="lastname" placeholder="Фамилия" value="<?= set_value('lastname') ? set_value('lastname') : $user['lastname'] ?>"/>
        <input type="input" class="form-control" name="firstname" placeholder="Имя" value="<?= set_value('firstname') ? set_value('firstname') : $user['firstname'] ?>"/>
        <input type="input" class="form-control" name="secondname" placeholder="Отчество" value="<?= set_value('secondname') ? set_value('secondname') : $user['secondname'] ?>"/>
    </div>
</fieldset>
<fieldset>
    <legend>Контактные данные:</legend>
    <div class="form-group">
        <input type="input" class="form-control" name="email" placeholder="E-mail" value="<?= set_value('email') ? set_value('email') : $user['email'] ?>"/>
        <input type="input" class="form-control" name="phone" placeholder="Телефон #" value="<?= set_value('phone') ? set_value('phone') : $user['phone'] ?>"/>
    </div>
</fieldset>
<fieldset>
    <legend>Адрес:</legend>
    <div class="form-group">
        здесь будет поле для автозаполняемого ввода адреса
    </div>
    <div class="form-group">
        <input type="input" class="form-control" name="city" placeholder="Город" value="<?= set_value('city') ? set_value('city') : $user['city'] ?>"/>
        <input type="input" class="form-control" name="street" placeholder="Улица" value="<?= set_value('street') ? set_value('street') : $user['street'] ?>"/>
        <input type="input" class="form-control" name="home" placeholder="№ дома" value="<?= set_value('home') ? set_value('home') : $user['home'] ?>"/>
    </div>
</fieldset>
<fieldset>
    <legend>Пароль:</legend>
    <div class="form-group">
        <input type="password" class="form-control" name="password" placeholder="Пароль" />
        <input type="password" class="form-control" name="confirm" placeholder="Подтверждение пароля"/>
    </div>
</fieldset>
    <div class="form-group">
        <button class="btn btn-default" type="submit">
            <span aria-hidden="true" class="glyphicon glyphicon-ok"></span>Сохранить данные
        </button>
    </div>
</fieldset>
</form>