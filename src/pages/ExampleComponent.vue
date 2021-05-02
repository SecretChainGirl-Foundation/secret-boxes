<template>
    <div class="example-page">
        Link :
        <br />
        <a href="#" class="link">Docker website</a>
        <br />
        <a href="#" class="link">Docker website</a>
        <br>
        <br>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.188 8.71899C6.627 8.27999 7.114 7.91799 7.632 7.63199C10.519 6.04099 14.221 6.88699 16.077 9.70099L13.831 11.946C13.187 10.477 11.588 9.64099 9.997 9.99699C9.398 10.131 8.829 10.43 8.364 10.895L4.06 15.201C2.753 16.508 2.753 18.634 4.06 19.941C5.367 21.248 7.493 21.248 8.8 19.941L10.127 18.614C11.334 19.093 12.628 19.284 13.906 19.189L10.977 22.118C8.466 24.629 4.395 24.629 1.884 22.118C-0.627002 19.607 -0.627002 15.536 1.884 13.025L6.188 8.71899ZM13.024 1.88299L10.095 4.81199C11.372 4.71599 12.667 4.90799 13.874 5.38599L15.2 4.05999C16.507 2.75299 18.633 2.75299 19.94 4.05999C21.247 5.36699 21.247 7.49299 19.94 8.79999L15.635 13.105C14.324 14.416 12.195 14.405 10.895 13.105C10.592 12.802 10.331 12.425 10.168 12.054L7.922 14.299C8.158 14.657 8.403 14.966 8.718 15.281C9.53 16.093 10.564 16.698 11.754 16.985C13.296 17.356 14.948 17.151 16.367 16.368C16.885 16.082 17.372 15.72 17.811 15.281L22.115 10.976C24.627 8.46499 24.627 4.39399 22.116 1.88299C19.605 -0.627012 15.535 -0.627012 13.024 1.88299Z" fill="black"/>
        </svg>
        <br>
        <br>
        Highlights/Code:
        <br>
        <br>
        <div class="code">This is a code{}</div>
        <br>
        <br>
        <ul>
            <li>Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
                Tutorial description <span class="code"> insert code ^0.5.0; </span>  sit amet, consectetur adipiscing elit
            </li>
            <li>Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
        <br>
        <br>
        <br>
        <br>
        Note/Warnings:
        <br>
        <br>
        <div class="info-note">
            <strong>Note:</strong> Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <br>
        <div class="info-warning">
           <strong> ⚠ Warning ⚠ </strong>
           <br>
            Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <br>
        <br>
        Code preview:
        <br>
        <br>
        <div class="code-preview">
            <code >
                hello world;
            </code>
        </div>
        <br><br><br>
        Images:
        <br>
       <img src="/img/example/264-200.png" alt="Example"> <br> <br>
       <img src="/img/example/584-336.png" alt="Example"> <br> <br>
       <img src="/img/example/584-200.png" alt="Example"> <br> <br>
       <img src="/img/example/264-32.png" alt="Example"> <br> <br>
       <img src="/img/example/584-32.png" alt="Example"> <br> <br>
       <img src="/img/example/532-424.png" alt="Example"> <br> <br>
       <img src="/img/example/532-424.png" alt="Example"> <br> <br>
    </div>
</template>
<style lang="scss" scoped>
    .example-page{
        width: 100%;
        padding: 0 10%;
        position: relative;
        overflow: hidden;
        background: var(--grayscale);
        & .link{
            color: var(--secondary);
            &:hover{
            text-decoration: underline;
            }
        }
       & .code{
           display: inline;
           background: var(--background);
           color: var(--primary);
        }
        & .info-note{
             background: var(--primary);
             max-width: 500px;
             padding: 30px;
             border-radius: 5px;
        }
         & .info-warning{
             background: var(--error-dark);
             color: white;
             max-width: 500px;
             padding: 30px;
             border-radius: 5px;
        }
        & .code-preview{
            background: black;
            color: white;
             padding: 30px;
             border-radius: 5px;
             max-width: 500px;
             min-height: 150px;
             overflow-x:scroll
        }
        & img{
            max-width: 100%;
        }
    }
</style>