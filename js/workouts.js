const workouts = [
    {
        distance: "5k",
        level: "beginner",
        terrain: "hilly",
        title: "Hill Sprints for 5k",
        workout: "Start with a 1 mile warm-up. Start at the bottom of a hill that will take at least 30 seconds to run up. Sprint up the hill for 30 seconds. Jog down for recovery. Run 6 reps. Cool down for 1-2 miles.",
        source: "marathonhandbook.com",
    },

    {
        distance: "5k",
        level: "beginner",
        terrain: "track",
        title: "1000 Meter Repeats",
        workout: "Start with a 1 mile warm-up. Run 3 x 1000 meters at your target race pace. After each rep, take 90 seconds recovery (walk). Cool down run for 1 mile.",
        source: "marathonhandbook.com",     
    },

    {
        distance: "5k",
        level: "beginner",
        terrain: "flat-road",
        title: "1 Minute Repeats",
        workout: "Start with a 1 mile warm-up. Now you will run hard for 10 intervals of 1 minute each. Run 1 minute hard. Then walk for one minute. Repeat x10. Cool down run for 1 mile.",
        source: "therunningchannel.com",
    },

    {
        distance: "5k",
        level: "intermediate",
        terrain: "hilly",
        title: "Hill Sprints for 5K",
        workout: "Start with a 2 mile warm-up. Start at the bottom of a hill that will take 45 seconds to run up. Sprint up the hill for 45 seconds. Jog down for recovery. Run 10-12 reps. Cool down for 2 miles.",
        source: "marathonhandbook.com",
    },

    {
        distance: "5k",
        level: "intermediate",
        terrain: "track",
        title: "1000 Meter Repeats",
        workout: "Start with a 2 mile warm-up. Run 5 x 1000 meters at your target race pace. After each rep, take 60-90 seconds recovery (walk). Cool down run for 2 miles.",
        source: "marathonhandbook.com",
    },

    {
        distance: "5k",
        level: "intermediate",
        terrain: "flat-road",
        title: "2 Minute Repeats",
        workout: "Start with a 2 mile warm-up. Now you will run hard for 10 intervals of 2 minutes each. Run 2 minutes hard. Then walk for one minute. Repeat x10. Cool down run for 2 miles.",
        source: "the runningchannel.com",
    },

    {
        distance: "10k",
        level: "beginner",
        terrain: "hilly",
        title: "Explosive Hill Sprints",
        workout: "Start with a 1 mile warm-up. Find a steep hill. Sprint at your max effort for 10 seconds. Jog/walk recovery for 3 minutes. Complete 6-8 hill sprints. Cool down for 1 or 2 miles.",
        source: "best-running-tips.com",
    },

    {
        distance: "10k",
        level: "beginner",
        terrain: "track",
        title: "Ladder Workout",
        workout: "Start with a 1 mile warm-up. Run 200 meters fast. Walk for 1 minute for recovery. Repeat once. Then run 600 meters fast. Walk for 1 minute. Complete 4-6 x 600 meters with 1 minute walk in between. Finish off with 2 more 200 meters with a 1 minute walk recovery. Complete 1 cool down mile.",
        source: "therunningchannel.com",
    },

    {
        distance: "10k",
        level: "beginner",
        terrain: "flat-road",
        title: "Mile Repeats",
        workout: "Start with a 1 mile warm up. Run 2-3 x 1 mile at your 10k goal race pace. Between each mile, walk for 1-2 minutes to recover. End with a 1 mile cooldown.",
        source: "therunningchannel.com",
    },

    {
        distance: "10k",
        level: "intermediate",
        terrain: "hilly",
        title: "Hill Sprints",
        workout: "Start with a 1-2 mile warm-up. Find a steep hill. Sprint at your max effort for 10 seconds. Jog/walk recovery for 3 minutes. Complete 10 hill sprints. Cool down for 2 miles.",
        source: "best-running-tips.com",
    },

    {
        distance: "10k",
        level: "intermediate",
        terrain: "track",
        title: "Ladder Workout",
        workout: "Start with a 2 mile warm-up. Run 200 meters fast. Walk for 1 minute for recovery. Repeat once. Then run 600 meters fast. Walk for 1 minute. Complete 6 x 800 meters with 1 minute walk in between. Finish off with 2 more 200 meters with a 1 minute walk recovery. Complete 1 cool down mile.",
        source: "therunningchannel.com",
    },

    {
        distance: "10k",
        level: "intermediate",
        terrain: "flat-road",
        title: "Mile Repeats",
        workout: "Start with a 1 mile warm up. Run 5-6 x 1 mile at your 10k goal race pace. Between each mile, walk for 1 minute to recover. End with a 1 mile cooldown.",
        source: "therunningchannel.com",
    },

    {
        distance: "half-marathon",
        level: "beginner",
        terrain: "hilly",
        title: "Finishing Hills",
        workout: "Plan a 3 mile run route that finishes near a hill. Run 3 miles at a casual pace. At the end of your run, finish on an uphill maintaining pace and practicing form.",
        source: "https://runwindsor.com/3-best-hill-training-sessions-for-half-marathon-runners/",
    },

    {
        distance: "half-marathon",
        level: "beginner",
        terrain: "track",
        title: "Ladder Workout",
        workout: "Start with a 10 minute warm-up. Run 400 meters hard. Recover jog for 400 meters. Run 800 meters hard. Recover jog for 400 meters. Run 1200 meters hard. Recover jog for 400 meters. Run 1600 meters hard. Recover jog for 400 meters. Cool down run for 10 minutes.",
        source: "marathonhandbook.com",
    },

    {
        distance: "half-marathon",
        level: "beginner",
        terrain: "flat-road",
        title: "Tempo Run",
        workout: "Start with a 10 minute warm-up. Run at a comfortably hard pace for 20 minutes. End with a 10 minute cool down.",
        source: "https://www.trainingforhalfmarathon.org/training-plans/essential-half-marathon-speed-workouts",
    },

    {
        distance: "half-marathon",
        level: "intermediate",
        terrain: "hilly",
        title: "Finishing Hills",
        workout: "Plan a 5 mile run route that finishes near a hill. Run 5 miles at a casual pace. At the end of your run, finish on an uphill maintaining pace and practicing form. Jog to the bottom of the hill and run up it once more.",
        source: "https://runwindsor.com/3-best-hill-training-sessions-for-half-marathon-runners/",
    },

    {
        distance: "half-marathon",
        level: "intermediate",
        terrain: "track",
        title: "Ladder Workout",
        workout: "Start with a 10 minute warm-up. Run 400 meters hard. Recover jog for 400 meters. Run 800 meters hard. Recover jog for 400 meters. Run 1200 meters hard. Recover jog for 400 meters. Run 1600 meters hard. Recover jog for 400 meters. Run 2000 meters hard. Recover jog for 400 meters. Cool down run for 10-20 minutes minutes.",
        source: "marathonhandbook.com",
    },

    {
        distance: "half-marathon",
        level: "intermediate",
        terrain: "flat-road",
        title: "Marshmallow Workout",
        workout: "Start with a 10 minute warm-up run. Run for 6 minutes at your half marathon goal pace. Go straight into a 2 minute surge. Repeat four times. Finish with a 10 minute cool down.",
        source: "runnersworld.com",
    },
]