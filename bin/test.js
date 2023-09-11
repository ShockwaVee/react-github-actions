console.log(`
*🧭 New Features*

- Add manager field to person. - <https://app.productive.io/109-productive/tasks/task/5395856|Task-5395856>

*⭐️ Updates*

- "API access" card in settings renamed to "API integrations" - <https://app.productive.io/109-productive/tasks/task/5353703|Task-5353703>
- The note field for document information in budgets is now wider - <https://app.productive.io/109-productive/tasks/task/5174377|Task-5174377>
- Docs toolbar functionality adjustments according to functionality needs - <https://app.productive.io/109-productive/tasks/task/5438324|Task-5438324>

*🧪 Beta features*

- Made the overhead addon toggle visible and fixed a bug when declining recalculation after turning overheads on - <https://app.productive.io/109-productive/tasks/task/5534258|Task-5534258>
- Removed the undertime/overtime information and overhead actions from the table - <https://app.productive.io/109-productive/tasks/task/5534616|Task-5534616>
- Removed the undertime/overtime logic which can now be controlled more granually - <https://app.productive.io/109-productive/tasks/task/5534779|Task-5534779>
- Checklists in Docs - <https://app.productive.io/109-productive/tasks/task/5027389|Task-5027389>
- This reverts commit 4668afd2320042fff3735bdb2064973204c10c0c.
- Added separate flags for unstable permissions - <https://app.productive.io/109-productive/tasks/task/5086330|Task-5086330>
- Added support for subscription products (HR integrations) - <https://app.productive.io/109-productive/tasks/task/4054786|Task-4054786>
- Implemented new permission group called "Automations" which enables users to view, add, edit or delete automations.
- Fixed an issue where the button for creating a new budget would be visible without the permission - <https://app.productive.io/109-productive/tasks/task/5470741|Task-5470741>
- Bulk editing time entries and changing the service to non-billable will now show a warning - <https://app.productive.io/109-productive/tasks/task/5451749|Task-5451749>
- Added a "Show/Hide" button for facility costs form on overhead details modal
- Reload items on deal -> time entries table when changing service - <https://app.productive.io/109-productive/tasks/task/5451087|Task-5451087>
- Added template projects policy revamp BF - <https://app.productive.io/109-productive/tasks/task/4997085|Task-4997085>
- Allowed users to bulk move time entries to other projects - <https://app.productive.io/109-productive/tasks/task/5176655|Task-5176655>

*🐞 Bugs Fixed*

- Update plan if you have HR integrations product without causing errors - <https://app.productive.io/109-productive/tasks/task/4054786|Task-4054786>
- Quick add should now show allowed objects when user doesn't have permissions for time entries, expenses nor tasks - <https://app.productive.io/109-productive/tasks/task/4630100|Task-4630100>
- Deleted the failing unit test
- We've given the 'deal owner' dynamic group a makeover worthy of a design review. 🎩✨ We've not only moved it to the top of the list, but we've also revamped its contents to proudly display the real deal owner instead of a generic dynamic group. No more imposter syndrome for our deal owners! 🦸‍♂️💼 And as a grand finale, we've bid farewell to the 'deal owner' dynamic group option from the select field. Sayonara, old friend! 👋🚀 - <https://app.productive.io/109-productive/tasks/task/5181856|Task-5181856>
- Always display the second tax in the document template builder when it has 0 as a value - <https://app.productive.io/109-productive/tasks/task/5516142|Task-5516142>
- Fixed billing plan translation typos (annualy -> annually, biannualy -> biannually) - <https://app.productive.io/109-productive/tasks/task/5533092|Task-5533092>
- Now, you can conjure up new budgets even when the client company has no projects AND the mystical 'projectless budgets' flag is fluttering in the breeze. 🪙🏰 No need for projects to hold you back; let your budgetary creativity run wild in this projectless wonderland! 🚀💰🪄 - <https://app.productive.io/109-productive/tasks/task/5463662|Task-5463662>
- Fix for preventing file upload request when uploading avatars that are too large - <https://app.productive.io/109-productive/tasks/task/5522585|Task-5522585>
- Our financial item report had a bit of time-travel glitch where today's bookings were unexpectedly marked as past events. 📅🚀 Time-space continuum shenanigans, anyone? But worry not, we've patched things up, and now our report will have its dates firmly grounded in the present, no more time-warping surprises. Happy reporting, fellow temporal adventurers! 🕰️💼 - <https://app.productive.io/109-productive/tasks/task/5474963|Task-5474963>
- Resolved issue preventing Timesheet PDF from opening in an invoice - <https://app.productive.io/109-productive/tasks/task/5501065|Task-5501065>
- Our active filter occasionally got distracted by the scent of roses and went on a little adventure, leaving us with the infamous 'undefined is not an object' error. 🌹🧐 This fix brings our wayward active filter back on track, putting an end to the 'undefined is not an object' error and ensuring a smooth journey for all. No more detours, just code that works flawlessly! 🚀🛠️ - <https://app.productive.io/109-productive/tasks/task/5350032|Task-5350032>
- Add to project button will not be show users who has not permission for action - <https://app.productive.io/109-productive/tasks/task/5474759|Task-5474759>
- Fixed doc or page title in the modal window when deleting a document - <https://app.productive.io/109-productive/tasks/task/5511810|Task-5511810>`);
