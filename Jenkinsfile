pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
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