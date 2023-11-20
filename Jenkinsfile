pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('run json-server') {
            steps {
                sh 'mkdir json-server-master'
                sh 'ls'
                sh 'cd json-server-master'
                git 'https://github.com/typicode/json-server.git'
                sh 'echo "{"posts": [{ "id": 1, "title": "Aprendiendo Cypress - Módulo 1", "author": "Cesar" },{ "id": 2, "title": "Aprendiendo Cypress - Módulo 2", "author": "Cesar" }],"comments": [{ "id": 1, "body": "Muy buen Módulo", "postId": 1 }],"profile": { "name": "Cesar" }}" > db.json'
                sh 'npm install'
                sh 'node run start'
            }
        }
        stage('build') {
            steps {
                sh 'ls'
                sh 'npm ci'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}