<div>
    <table class="table-striped table-bordered table-hover table-condensed">
        <thead>
            <tr>
                <th>ID</th>
                <th>Фамилия, имя, отчество</th>
                <th>E-mail</th>
                <th>Телефон #</th>
                <th>Адрес</th>
                <th>Join Date</th>
                <th>Actions</th>
            </tr>
        </thead>
    <?php foreach ($users as $user): ?>
        <tr>
            <td><?= $user['userid'] ?></td>
            <td><?= fullname($user) ?></td>
            <td><?= $user['email'] ?></td>
            <td><?= $user['phone'] ?></td>
            <td><?= $user['city'] ?>&nbsp;<?= $user['street'] ?>&nbsp;<?= $user['home'] ?></td>
            <td><?= $user['joindate'] ?></td>
            <td>
                <a href="<?= site_url('/users/edit/'.$user['userid']) ?>">
                    <span class="glyphicon glyphicon-pencil" title="Edit user <?= $user['userid'] ?>"></span>
                </a>
                <a href="<?= site_url('/users/delete/'.$user['userid']) ?>" onClick='return confirm("Are you sure to delete this user?");'>
                    <span class="glyphicon glyphicon-remove" title="Delete user <?= $user['userid'] ?>"></span>
                </a>
            </td>
        </tr>
    <?php endforeach; ?>
    </table>
</div>
