const users = [
    { name: 'Member name', username: 'username',  },
    { name: 'Member name', username: 'username',  },
    { name: 'Member name', username: 'username',  },
    { name: 'Member name', username: 'username',  },
    { name: 'Member name', username: 'username',  },
    { name: 'Member name', username: 'username',  }
];

const userContainer = document.querySelector('.user-list');

// Function to create a user element
function createUser(user) {
    const userElem = document.createElement('div');
    userElem.classList.add('user');

    const userImg = document.createElement('img');
    userImg.src = 'fotoprofile.jpg';
    userImg.alt = 'User Profile';

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const nameElem = document.createElement('h3');
    nameElem.textContent = user.name;

    const usernameElem = document.createElement('span');
    usernameElem.classList.add('username');
    usernameElem.textContent = `@${user.username}`;

    const followButton = document.createElement('button');
    followButton.classList.add('follow-button');
    followButton.textContent = 'Follow';

    userInfo.appendChild(nameElem);
    userInfo.appendChild(usernameElem);

    userElem.appendChild(userImg);
    userElem.appendChild(userInfo);
    userElem.appendChild(followButton);
    

    return userElem;
}

// Add users to the container
users.forEach(user => {
    const userElement = createUser(user);
    userContainer.appendChild(userElement);
});