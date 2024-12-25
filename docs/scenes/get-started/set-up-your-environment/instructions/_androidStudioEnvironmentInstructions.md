## Install Watchman and JDK

### | macOS

#### Prerequisites

* install [Homebrew](https://brew.sh/)

#### Install dependencies

* [Install Watchman](https://facebook.github.io/watchman/docs/install#macos)

  ```
  brew install watchman
  ```

* install OpenJDK distribution (Azul Zulu)

  ```
  brew install --cask zulu@17
  ```

  ```bash
  # set environment variable 
  export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
  ```
  
  * TODO: Is there some reason to choose specifically this distribution ❓  

### | Windows

* TODO:
#### Prerequisites

Use a package manager such as [Chocolatey](https://chocolatey.org/) to install the following dependencies.

#### Install dependencies

Install [Java SE Development Kit (JDK)](https://openjdk.org/):

<Terminal cmd={['$ choco install -y microsoft-openjdk17']} />

### | Linux

#### Install dependencies

<Step label="1">

Follow [instructions from the Watchman documentation](https://facebook.github.io/watchman/docs/install#linux) to compile and install it from the source.

</Step>

<Step label="2">

Install [Java SE Development Kit (JDK)](https://openjdk.org/):

You can download and install [OpenJDK](http://openjdk.java.net/) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager.

</Step>
