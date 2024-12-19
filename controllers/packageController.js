import Package from '../models/Package.js';

export async function getPackages(req, res) {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve packages', error });
  }
}

export async function getPackage(req, res) {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json(pkg);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve package', error });
  }
}

export async function addPackage(req, res) {
  try {
    const newPackage = await Package.create(req.body);
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create package', error });
  }
}

export async function updatePackage(req, res) {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json(updatedPackage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update package', error });
  }
}

export async function deletePackage(req, res) {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json({ message: 'Package deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete package', error });
  }
}
