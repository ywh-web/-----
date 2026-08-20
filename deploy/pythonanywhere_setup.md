# PythonAnywhere 免费部署

## 1. 上传代码

在 PythonAnywhere 的 Bash 控制台执行：

```bash
git clone https://github.com/ywh-web/-----.git chaoyun-mall
cd chaoyun-mall
python3.13 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --no-input
```

如果免费账户没有 `python3.13`，请选择控制台提供的最新 Python 版本，并使用相同版本创建虚拟环境。

## 2. 创建管理员

```bash
python manage.py createsuperuser
```

请在控制台中自行输入管理员密码，不要把密码提交到 GitHub。

## 3. 配置 Web 应用

在 PythonAnywhere 的 Web 页面新增 Django/手动配置的 Web 应用，把虚拟环境设置为：

```text
/home/YOUR_USERNAME/chaoyun-mall/.venv
```

打开 WSGI 配置文件，把 `deploy/pythonanywhere_wsgi.py.example` 的内容复制进去，并替换：

- `YOUR_USERNAME`：PythonAnywhere 用户名
- `PROJECT_ROOT`：项目实际路径
- `DJANGO_SECRET_KEY`：随机长字符串
- `DJANGO_ALLOWED_HOSTS`：你的 PythonAnywhere 域名

静态文件映射：

```text
URL: /static/
Directory: /home/YOUR_USERNAME/chaoyun-mall/staticfiles
```

保存后点击 **Reload**。

## 4. 连接 Netlify 前端

PythonAnywhere 后端地址确定后，在前端构建时设置：

```text
VITE_API_BASE_URL=https://YOUR_USERNAME.pythonanywhere.com/api
```

然后重新构建并部署 Netlify。当前项目的表单接口是：

```text
POST /api/contact-inquiries/
```
