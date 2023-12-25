CI with Python

Linting:
    With Python, you can use several different options for linting. As of writing this text, [Visual Studio Code](https://code.visualstudio.com/docs/python/linting) offers the following Python linters as extensions:

        Published by Microsoft:
            - Pylint	
            - flake8
            - mypy	

        Published by the community:
            - Ruff	
            - mypy

Testing:
    According to [realpython.com](https://realpython.com/python-testing/), the three most popular test libraries for Python are:

        - unittest (comes with the standard library)
        - nose or nose2
        - pytest

Building:
    Even though you don't need to build the python code you run in your own machine, other usage cases, e.g., building and publishing [your own package](https://www.freecodecamp.org/news/build-your-first-python-package/) will require building support packages.

Alternatives to Jenkins and GitHub Actions:
    Listed below are a couple of alternatives to Jenkins according to [blog post at BrowserStack.com](https://www.browserstack.com/guide/best-jenkins-alternatives-for-developer-teams):

        1. TeamCity
        2. AWS CodePipeline
        3. Bamboo
        4. CircleCI
        5. Gitlab CI
        6. Travis CI

    Listed below are a couple of alternatives (also includes Jenkins) to GitHub Actions according to [stackshare.io](https://stackshare.io/github-actions/alternatives):
        
        - CircleCI
        - Jenkins
        - Azure Pipelines
        - GitLab CI
        - GitLab
        - Buildkite
        - Travis CI
        - Airflow

Self-hosted vs. Cloud-based:
    In the context of building your own python package using an existing cloud-based service to publish your package is definitely a better option. [PyPI](https://pypi.org/) is the standard choice for publishing python packages.