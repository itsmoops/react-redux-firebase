/**
 * Add your own database configurations here - Go to your Firebase Project
 * First click on Storage and initialize it for your project
 * Copy the config info from Overview -> Add Firebase to your web app
 */
const firebaseConfig = {
    dev: {
        apiKey: 'AIzaSyDsNFb9mhSXqmOO-0JWZQvUfqTkr2WBZF8',
        authDomain: 'boilerplate-18625.firebaseapp.com',
        databaseURL: 'https://boilerplate-18625.firebaseio.com',
        projectId: 'boilerplate-18625',
        storageBucket: 'boilerplate-18625.appspot.com',
        messagingSenderId: '823691206640'
    },

    staging: {
        apiKey: 'AIzaSyDfY5yIqOq_pvKMn6iEKKWwGSULnOObQfU',
        authDomain: 'boilerplate-staging-3ef4b.firebaseapp.com',
        databaseURL: 'https://boilerplate-staging-3ef4b.firebaseio.com',
        projectId: 'boilerplate-staging-3ef4b',
        storageBucket: 'boilerplate-staging-3ef4b.appspot.com',
        messagingSenderId: '586141068559'
    },

    prod: {
        apiKey: 'AIzaSyDZS2SRPGP6gHxvfl3RpdWgW3jn9KYn8cc',
        authDomain: 'boilerplate-prod-b5875.firebaseapp.com',
        databaseURL: 'https://boilerplate-prod-b5875.firebaseio.com',
        projectId: 'boilerplate-prod-b5875',
        storageBucket: 'boilerplate-prod-b5875.appspot.com',
        messagingSenderId: '708307577611'
    }
}

export default firebaseConfig
