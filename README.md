# Verdant 🌱

Verdant is a task‑management and reward‑driven mobile application built with Expo and React Native. It helps users stay motivated by tracking daily tasks, earning rewards for milestones, and connecting with friends through a simple community interface. In the future, we'd like to incorporate a fully-fledged social system as opposed to the outline currently in place.

## 🚀 Project Overview

- **Tasks** – users can create and complete tasks of various types (timed, quantity, events) stored in the `data` folder.
- **Rewards & Milestones** – completing tasks earns points that unlock rewards and milestones managed via context providers.
- **Community** – add friends, view a leaderboard, and celebrate progress together.
- **Profile & Shop** – personalize your profile and spend points on rewards in the shop.

The app uses Expo's [file‑based routing](https://docs.expo.dev/router/introduction/) to map files under `app/` to navigable screens.

## 📁 Project Structure

```
app/                # Screens and layout components
  (tabs)/           # Tab navigator views (community, profile, shop, tasks)
  components/       # Reusable UI components
  context/          # React contexts (favorite, milestone, name, sprout)
  data/             # JSON templates for tasks and rewards
  interfaces/       # TypeScript interfaces
assets/             # Images and static assets

package.json        # Dependencies and scripts
README.md           # This document
```

## 🛠️ Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npx expo start
   ```
3. **Open the app** in an emulator, simulator, or Expo Go (instructions appear in the terminal).

> The app is configured for both iOS and Android and will also run in a web browser.

## 📝 Editing & Development

- All new screens or routes belong under `app/`. Create files or folders and Expo Router will pick them up automatically.
- Shared UI components live in `app/components`. Add new widgets or update existing ones to reuse throughout the app.
- Context providers in `app/context` hold global state such as user name, favorites, and milestone progress.
- Modify task/reward templates in `app/data/*.json`; the code reads these files to populate lists.

## 📦 Data Formats

- `event-tasks.json` – event‑style tasks with custom dates
- `quantity-tasks.json` – tasks requiring a number of completions
- `time-tasks.json` – tasks measured by duration
- `rewards.json` – available rewards with cost and description

Interfaces for tasks and rewards are defined in `app/interfaces/task.ts` and `reward.ts` respectively.

## 🌐 Community Features

- **Friends list** – add or remove friends inside `app/components/community/friends-list.tsx`.
- **Leaderboard** – ranks users by points (mock data or real backend integration can be added).

Happy coding and growing with Verdant! 🌿
