# [Assignment: File Manager](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)

<br/>

```
$ cat /etc/os-release | grep 'VERSION='
VERSION="20.04.4 LTS (Focal Fossa)"
```

<br/>

```
$ node -v
v16.15.1
```

<br/>

# Как запускаю

<br/>

```
// RUN APP
$ cd app/
$ npm run start -- --username=your_username
```

<br/>

Я создал в проекте каталог с файлами из предыдущей задачи:

```
files\
```

И выполнял следующие команды для проверки в основном с этими файлами.

<br/>

### Комманды:

<br/>

```
up
cd
list
```

<br/>

```
os --EOL
os --cpus
os --homedir
os --username
os --architecture
```

<br/>

### Basic operations

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
cp fileToCopy.txt fileToCopy.txt.bkp
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
add newFile.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
add newFile.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
mv fileToRemove.txt /home/marley/tmp/


Проверки не в приложении, а в терминале прошли

// ls /home/marley/tmp/fileToRemove.txt
// cat /home/marley/tmp/fileToRemove.txt
// rm /home/marley/tmp/fileToRemove.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
cat fileToRead.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
rm fileToRemove.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
rn fileToCopy.txt NewFile.txt
```

<br/>

### Hash

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
ls
hash fileToCalculateHashFor.txt
```

<br/>

### Compress and decompress

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
compress fileToCompress.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
decompress fileToCompress.txt.br
```
