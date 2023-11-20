pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm fund'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}