# 项目协作说明

## 项目概览

本项目采用前后端分离的基础结构：

- 后端：Python 3.13 + Django 6.1
- 管理后台：django-simpleui 2026.1.13，中文界面
- 前端：Vue 3 + Vite 4，位于 `frontend/`
- 数据库：开发环境使用 SQLite，文件为 `db.sqlite3`
- 当前 Django 管理后台地址：`/admin/`
- 当前 Vue 前端为独立开发服务器，尚未与 Django API 完成对接

## 目录结构

```text
.
├── config/              # Django 项目配置、URL、ASGI/WSGI
├── core/                # Django 业务应用
├── frontend/            # Vue 3 + Vite 前端
├── db.sqlite3           # 开发数据库
├── manage.py            # Django 命令入口
└── .venv/               # Python 虚拟环境，不提交到版本库
```

## 开发环境

### 启动 Django

```powershell
. .\.venv\Scripts\Activate.ps1
python manage.py runserver
```

默认地址：`http://127.0.0.1:8000/`

### 启动 Vue

```powershell
cd frontend
npm install
npm run dev
```

默认地址：`http://localhost:5173/`

### 构建 Vue

```powershell
cd frontend
npm run build
```

## Django 约定

- 修改模型后执行 `python manage.py makemigrations` 和 `python manage.py migrate`。
- 使用 `python manage.py check` 做基础配置检查。
- 业务逻辑放在 `core/` 或后续拆分出的 Django 应用中，不要堆积到 `config/`。
- 新增前端需要调用的接口时，优先在 Django 中提供清晰的 JSON API，并进行必要的权限校验。
- 不要把密码、密钥、令牌等敏感信息写入代码或文档；生产环境应使用环境变量。

## Vue 约定

- 前端代码位于 `frontend/src/`。
- 使用 Vue 组件组织页面，避免在单个组件中堆积过多业务逻辑。
- API 请求、环境配置和页面展示逻辑尽量分层，便于后续接入 Django API。
- 修改依赖后同步更新 `frontend/package.json` 和 `frontend/package-lock.json`。

## 验证命令

```powershell
# 后端
.\.venv\Scripts\python.exe manage.py check

# 前端
cd frontend
npm run build
```

## 变更原则

- 保持 Django 管理后台 `/admin/` 可用。
- 优先进行小范围、可回滚的修改。
- 完成代码修改后运行相关验证命令。
- 不要提交 `.venv/`、`frontend/node_modules/`、`frontend/dist/` 或本地数据库中的敏感数据。
