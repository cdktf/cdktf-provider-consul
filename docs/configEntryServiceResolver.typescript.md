# `configEntryServiceResolver` Submodule <a name="`configEntryServiceResolver` Submodule" id="@cdktf/provider-consul.configEntryServiceResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceResolver <a name="ConfigEntryServiceResolver" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolver(scope: Construct, id: string, config: ConfigEntryServiceResolverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig">ConfigEntryServiceResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig">ConfigEntryServiceResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover">putFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets">putSubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset">resetDefaultSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets">resetSubsets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFailover` <a name="putFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover"></a>

```typescript
public putFailover(value: IResolvable | ConfigEntryServiceResolverFailover[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: IResolvable | ConfigEntryServiceResolverLoadBalancer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect"></a>

```typescript
public putRedirect(value: IResolvable | ConfigEntryServiceResolverRedirect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]

---

##### `putSubsets` <a name="putSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets"></a>

```typescript
public putSubsets(value: IResolvable | ConfigEntryServiceResolverSubsets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]

---

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetDefaultSubset` <a name="resetDefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset"></a>

```typescript
public resetDefaultSubset(): void
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover"></a>

```typescript
public resetFailover(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect"></a>

```typescript
public resetRedirect(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetSubsets` <a name="resetSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets"></a>

```typescript
public resetSubsets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets">subsets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput">defaultSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput">failoverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput">loadBalancerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput">redirectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput">subsetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout">connectTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset">defaultSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover"></a>

```typescript
public readonly failover: ConfigEntryServiceResolverFailoverList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: ConfigEntryServiceResolverLoadBalancerList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect"></a>

```typescript
public readonly redirect: ConfigEntryServiceResolverRedirectList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a>

---

##### `subsets`<sup>Required</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets"></a>

```typescript
public readonly subsets: ConfigEntryServiceResolverSubsetsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: string;
```

- *Type:* string

---

##### `defaultSubsetInput`<sup>Optional</sup> <a name="defaultSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput"></a>

```typescript
public readonly defaultSubsetInput: string;
```

- *Type:* string

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput"></a>

```typescript
public readonly failoverInput: IResolvable | ConfigEntryServiceResolverFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: IResolvable | ConfigEntryServiceResolverLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput"></a>

```typescript
public readonly redirectInput: IResolvable | ConfigEntryServiceResolverRedirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: string;
```

- *Type:* string

---

##### `subsetsInput`<sup>Optional</sup> <a name="subsetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput"></a>

```typescript
public readonly subsetsInput: IResolvable | ConfigEntryServiceResolverSubsets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: string;
```

- *Type:* string

---

##### `defaultSubset`<sup>Required</sup> <a name="defaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset"></a>

```typescript
public readonly defaultSubset: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceResolverConfig <a name="ConfigEntryServiceResolverConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverConfig: configEntryServiceResolver.ConfigEntryServiceResolverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name">name</a></code> | <code>string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout">connectTimeout</a></code> | <code>string</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset">defaultSubset</a></code> | <code>string</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover">failover</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]</code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer">loadBalancer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect">redirect</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]</code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets">subsets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]</code> | subsets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: string;
```

- *Type:* string

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `defaultSubset`<sup>Optional</sup> <a name="defaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset"></a>

```typescript
public readonly defaultSubset: string;
```

- *Type:* string

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover"></a>

```typescript
public readonly failover: IResolvable | ConfigEntryServiceResolverFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IResolvable | ConfigEntryServiceResolverLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect"></a>

```typescript
public readonly redirect: IResolvable | ConfigEntryServiceResolverRedirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `subsets`<sup>Optional</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets"></a>

```typescript
public readonly subsets: IResolvable | ConfigEntryServiceResolverSubsets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

### ConfigEntryServiceResolverFailover <a name="ConfigEntryServiceResolverFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverFailover: configEntryServiceResolver.ConfigEntryServiceResolverFailover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName">subsetName</a></code> | <code>string</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters">datacenters</a></code> | <code>string[]</code> | Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup">samenessGroup</a></code> | <code>string</code> | Specifies the sameness group at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service">service</a></code> | <code>string</code> | Specifies the name of the service to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]</code> | targets block. |

---

##### `subsetName`<sup>Required</sup> <a name="subsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName"></a>

```typescript
public readonly subsetName: string;
```

- *Type:* string

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subset_name ConfigEntryServiceResolver#subset_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario.

When Consul cannot establish a connection with the first datacenter in the list, it proceeds sequentially until establishing a connection with another datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenters ConfigEntryServiceResolver#datacenters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `samenessGroup`<sup>Optional</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup"></a>

```typescript
public readonly samenessGroup: string;
```

- *Type:* string

Specifies the sameness group at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Specifies the name of the service to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets"></a>

```typescript
public readonly targets: IResolvable | ConfigEntryServiceResolverFailoverTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#targets ConfigEntryServiceResolver#targets}

---

### ConfigEntryServiceResolverFailoverTargets <a name="ConfigEntryServiceResolverFailoverTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverFailoverTargets: configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter">datacenter</a></code> | <code>string</code> | Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace to use for the failover target. If empty, the default namespace is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition within the same datacenter to use for the failover target. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer">peer</a></code> | <code>string</code> | Specifies the destination cluster peer to resolve the target service name from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service">service</a></code> | <code>string</code> | Specifies the service name to use for the failover target. If empty, the current service name is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | Specifies the named subset to use for the failover target. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace to use for the failover target. If empty, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition within the same datacenter to use for the failover target.

If empty, the default partition is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

Specifies the destination cluster peer to resolve the target service name from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Specifies the service name to use for the failover target. If empty, the current service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

Specifies the named subset to use for the failover target.

If empty, the default subset for the requested service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverLoadBalancer <a name="ConfigEntryServiceResolverLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverLoadBalancer: configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies">hashPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]</code> | hash_policies block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig">leastRequestConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]</code> | least_request_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy">policy</a></code> | <code>string</code> | Specifies the type of load balancing policy for selecting a host. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig">ringHashConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]</code> | ring_hash_config block. |

---

##### `hashPolicies`<sup>Optional</sup> <a name="hashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies"></a>

```typescript
public readonly hashPolicies: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]

hash_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#hash_policies ConfigEntryServiceResolver#hash_policies}

---

##### `leastRequestConfig`<sup>Optional</sup> <a name="leastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig"></a>

```typescript
public readonly leastRequestConfig: IResolvable | ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]

least_request_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#least_request_config ConfigEntryServiceResolver#least_request_config}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Specifies the type of load balancing policy for selecting a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#policy ConfigEntryServiceResolver#policy}

---

##### `ringHashConfig`<sup>Optional</sup> <a name="ringHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig"></a>

```typescript
public readonly ringHashConfig: IResolvable | ConfigEntryServiceResolverLoadBalancerRingHashConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]

ring_hash_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#ring_hash_config ConfigEntryServiceResolver#ring_hash_config}

---

### ConfigEntryServiceResolverLoadBalancerHashPolicies <a name="ConfigEntryServiceResolverLoadBalancerHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverLoadBalancerHashPolicies: configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig">cookieConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]</code> | cookie_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field">field</a></code> | <code>string</code> | Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue">fieldValue</a></code> | <code>string</code> | Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp">sourceIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the hash type should be source IP address. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal">terminal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if Consul should stop computing the hash when multiple hash policies are present. |

---

##### `cookieConfig`<sup>Optional</sup> <a name="cookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig"></a>

```typescript
public readonly cookieConfig: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]

cookie_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#cookie_config ConfigEntryServiceResolver#cookie_config}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#field ConfigEntryServiceResolver#field}

---

##### `fieldValue`<sup>Optional</sup> <a name="fieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue"></a>

```typescript
public readonly fieldValue: string;
```

- *Type:* string

Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#field_value ConfigEntryServiceResolver#field_value}

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp"></a>

```typescript
public readonly sourceIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the hash type should be source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#source_ip ConfigEntryServiceResolver#source_ip}

---

##### `terminal`<sup>Optional</sup> <a name="terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal"></a>

```typescript
public readonly terminal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if Consul should stop computing the hash when multiple hash policies are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#terminal ConfigEntryServiceResolver#terminal}

---

### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverLoadBalancerHashPoliciesCookieConfig: configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path">path</a></code> | <code>string</code> | Specifies the path to set for the cookie. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session">session</a></code> | <code>boolean \| cdktf.IResolvable</code> | Directs Consul to generate a session cookie with no expiration. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl">ttl</a></code> | <code>string</code> | Specifies the TTL for generated cookies. Cannot be specified for session cookies. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Specifies the path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#path ConfigEntryServiceResolver#path}

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session"></a>

```typescript
public readonly session: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Directs Consul to generate a session cookie with no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#session ConfigEntryServiceResolver#session}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Specifies the TTL for generated cookies. Cannot be specified for session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#ttl ConfigEntryServiceResolver#ttl}

---

### ConfigEntryServiceResolverLoadBalancerLeastRequestConfig <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverLoadBalancerLeastRequestConfig: configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount">choiceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}. |

---

##### `choiceCount`<sup>Optional</sup> <a name="choiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount"></a>

```typescript
public readonly choiceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}.

---

### ConfigEntryServiceResolverLoadBalancerRingHashConfig <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverLoadBalancerRingHashConfig: configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize">maximumRingSize</a></code> | <code>number</code> | Determines the maximum number of entries in the hash ring. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize">minimumRingSize</a></code> | <code>number</code> | Determines the minimum number of entries in the hash ring. |

---

##### `maximumRingSize`<sup>Optional</sup> <a name="maximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize"></a>

```typescript
public readonly maximumRingSize: number;
```

- *Type:* number

Determines the maximum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#maximum_ring_size ConfigEntryServiceResolver#maximum_ring_size}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize"></a>

```typescript
public readonly minimumRingSize: number;
```

- *Type:* number

Determines the minimum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#minimum_ring_size ConfigEntryServiceResolver#minimum_ring_size}

---

### ConfigEntryServiceResolverRedirect <a name="ConfigEntryServiceResolverRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverRedirect: configEntryServiceResolver.ConfigEntryServiceResolverRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter">datacenter</a></code> | <code>string</code> | Specifies the datacenter at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition">partition</a></code> | <code>string</code> | Specifies the admin partition at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer">peer</a></code> | <code>string</code> | Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup">samenessGroup</a></code> | <code>string</code> | Specifies the sameness group at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service">service</a></code> | <code>string</code> | Specifies the name of a service at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Specifies the datacenter at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the admin partition at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `samenessGroup`<sup>Optional</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup"></a>

```typescript
public readonly samenessGroup: string;
```

- *Type:* string

Specifies the sameness group at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Specifies the name of a service at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests.

If empty, the default subset is used. If specified, you must also specify at least one of the following in the same Redirect map: Service, Namespace, andDatacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverSubsets <a name="ConfigEntryServiceResolverSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

const configEntryServiceResolverSubsets: configEntryServiceResolver.ConfigEntryServiceResolverSubsets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter">filter</a></code> | <code>string</code> | Specifies an expression that filters the DNS elements of service instances that belong to the subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name">name</a></code> | <code>string</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing">onlyPassing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if instances that return a warning from a health check are allowed to resolve a request. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Specifies an expression that filters the DNS elements of service instances that belong to the subset.

If empty, all healthy instances of a service are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#filter ConfigEntryServiceResolver#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `onlyPassing`<sup>Required</sup> <a name="onlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing"></a>

```typescript
public readonly onlyPassing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if instances that return a warning from a health check are allowed to resolve a request.

When set to false, instances with passing and warning states are considered healthy. When set to true, only instances with a passing health check state are considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#only_passing ConfigEntryServiceResolver#only_passing}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceResolverFailoverList <a name="ConfigEntryServiceResolverFailoverList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverFailoverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>[]

---


### ConfigEntryServiceResolverFailoverOutputReference <a name="ConfigEntryServiceResolverFailoverOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup">resetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | ConfigEntryServiceResolverFailoverTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]

---

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters"></a>

```typescript
public resetDatacenters(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSamenessGroup` <a name="resetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup"></a>

```typescript
public resetSamenessGroup(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset"></a>

```typescript
public resetServiceSubset(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput">samenessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput">subsetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters">datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup">samenessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName">subsetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets"></a>

```typescript
public readonly targets: ConfigEntryServiceResolverFailoverTargetsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a>

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput"></a>

```typescript
public readonly datacentersInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `samenessGroupInput`<sup>Optional</sup> <a name="samenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput"></a>

```typescript
public readonly samenessGroupInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput"></a>

```typescript
public readonly serviceSubsetInput: string;
```

- *Type:* string

---

##### `subsetNameInput`<sup>Optional</sup> <a name="subsetNameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput"></a>

```typescript
public readonly subsetNameInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | ConfigEntryServiceResolverFailoverTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters"></a>

```typescript
public readonly datacenters: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `samenessGroup`<sup>Required</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup"></a>

```typescript
public readonly samenessGroup: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

---

##### `subsetName`<sup>Required</sup> <a name="subsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName"></a>

```typescript
public readonly subsetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverFailover;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>

---


### ConfigEntryServiceResolverFailoverTargetsList <a name="ConfigEntryServiceResolverFailoverTargetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverFailoverTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverFailoverTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>[]

---


### ConfigEntryServiceResolverFailoverTargetsOutputReference <a name="ConfigEntryServiceResolverFailoverTargetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer">resetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer"></a>

```typescript
public resetPeer(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset"></a>

```typescript
public resetServiceSubset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput">peerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer">peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput"></a>

```typescript
public readonly peerInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput"></a>

```typescript
public readonly serviceSubsetInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverFailoverTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession">resetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSession` <a name="resetSession" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession"></a>

```typescript
public resetSession(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput">sessionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session">session</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sessionInput`<sup>Optional</sup> <a name="sessionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput"></a>

```typescript
public readonly sessionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `session`<sup>Required</sup> <a name="session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session"></a>

```typescript
public readonly session: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig">putCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig">resetCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue">resetFieldValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal">resetTerminal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookieConfig` <a name="putCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig"></a>

```typescript
public putCookieConfig(value: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]

---

##### `resetCookieConfig` <a name="resetCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig"></a>

```typescript
public resetCookieConfig(): void
```

##### `resetField` <a name="resetField" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetFieldValue` <a name="resetFieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue"></a>

```typescript
public resetFieldValue(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```

##### `resetTerminal` <a name="resetTerminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal"></a>

```typescript
public resetTerminal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig">cookieConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput">cookieConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput">fieldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput">terminalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue">fieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp">sourceIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal">terminal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieConfig`<sup>Required</sup> <a name="cookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig"></a>

```typescript
public readonly cookieConfig: ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a>

---

##### `cookieConfigInput`<sup>Optional</sup> <a name="cookieConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput"></a>

```typescript
public readonly cookieConfigInput: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `fieldValueInput`<sup>Optional</sup> <a name="fieldValueInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput"></a>

```typescript
public readonly fieldValueInput: string;
```

- *Type:* string

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminalInput`<sup>Optional</sup> <a name="terminalInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput"></a>

```typescript
public readonly terminalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `fieldValue`<sup>Required</sup> <a name="fieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue"></a>

```typescript
public readonly fieldValue: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminal`<sup>Required</sup> <a name="terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal"></a>

```typescript
public readonly terminal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount">resetChoiceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChoiceCount` <a name="resetChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount"></a>

```typescript
public resetChoiceCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput">choiceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount">choiceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `choiceCountInput`<sup>Optional</sup> <a name="choiceCountInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput"></a>

```typescript
public readonly choiceCountInput: number;
```

- *Type:* number

---

##### `choiceCount`<sup>Required</sup> <a name="choiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount"></a>

```typescript
public readonly choiceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerLeastRequestConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>

---


### ConfigEntryServiceResolverLoadBalancerList <a name="ConfigEntryServiceResolverLoadBalancerList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>[]

---


### ConfigEntryServiceResolverLoadBalancerOutputReference <a name="ConfigEntryServiceResolverLoadBalancerOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies">putHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig">putLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig">putRingHashConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies">resetHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig">resetLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig">resetRingHashConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHashPolicies` <a name="putHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies"></a>

```typescript
public putHashPolicies(value: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]

---

##### `putLeastRequestConfig` <a name="putLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig"></a>

```typescript
public putLeastRequestConfig(value: IResolvable | ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]

---

##### `putRingHashConfig` <a name="putRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig"></a>

```typescript
public putRingHashConfig(value: IResolvable | ConfigEntryServiceResolverLoadBalancerRingHashConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]

---

##### `resetHashPolicies` <a name="resetHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies"></a>

```typescript
public resetHashPolicies(): void
```

##### `resetLeastRequestConfig` <a name="resetLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig"></a>

```typescript
public resetLeastRequestConfig(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRingHashConfig` <a name="resetRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig"></a>

```typescript
public resetRingHashConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies">hashPolicies</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig">leastRequestConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig">ringHashConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput">hashPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput">leastRequestConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput">ringHashConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashPolicies`<sup>Required</sup> <a name="hashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies"></a>

```typescript
public readonly hashPolicies: ConfigEntryServiceResolverLoadBalancerHashPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a>

---

##### `leastRequestConfig`<sup>Required</sup> <a name="leastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig"></a>

```typescript
public readonly leastRequestConfig: ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a>

---

##### `ringHashConfig`<sup>Required</sup> <a name="ringHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig"></a>

```typescript
public readonly ringHashConfig: ConfigEntryServiceResolverLoadBalancerRingHashConfigList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a>

---

##### `hashPoliciesInput`<sup>Optional</sup> <a name="hashPoliciesInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput"></a>

```typescript
public readonly hashPoliciesInput: IResolvable | ConfigEntryServiceResolverLoadBalancerHashPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>[]

---

##### `leastRequestConfigInput`<sup>Optional</sup> <a name="leastRequestConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput"></a>

```typescript
public readonly leastRequestConfigInput: IResolvable | ConfigEntryServiceResolverLoadBalancerLeastRequestConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>[]

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `ringHashConfigInput`<sup>Optional</sup> <a name="ringHashConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput"></a>

```typescript
public readonly ringHashConfigInput: IResolvable | ConfigEntryServiceResolverLoadBalancerRingHashConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigList <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerRingHashConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>[]

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize">resetMaximumRingSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumRingSize` <a name="resetMaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize"></a>

```typescript
public resetMaximumRingSize(): void
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize"></a>

```typescript
public resetMinimumRingSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput">maximumRingSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize">maximumRingSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumRingSizeInput`<sup>Optional</sup> <a name="maximumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput"></a>

```typescript
public readonly maximumRingSizeInput: number;
```

- *Type:* number

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput"></a>

```typescript
public readonly minimumRingSizeInput: number;
```

- *Type:* number

---

##### `maximumRingSize`<sup>Required</sup> <a name="maximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize"></a>

```typescript
public readonly maximumRingSize: number;
```

- *Type:* number

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize"></a>

```typescript
public readonly minimumRingSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverLoadBalancerRingHashConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>

---


### ConfigEntryServiceResolverRedirectList <a name="ConfigEntryServiceResolverRedirectList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverRedirectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverRedirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>[]

---


### ConfigEntryServiceResolverRedirectOutputReference <a name="ConfigEntryServiceResolverRedirectOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer">resetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup">resetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer"></a>

```typescript
public resetPeer(): void
```

##### `resetSamenessGroup` <a name="resetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup"></a>

```typescript
public resetSamenessGroup(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset"></a>

```typescript
public resetServiceSubset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput">peerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput">samenessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer">peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup">samenessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput"></a>

```typescript
public readonly peerInput: string;
```

- *Type:* string

---

##### `samenessGroupInput`<sup>Optional</sup> <a name="samenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput"></a>

```typescript
public readonly samenessGroupInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput"></a>

```typescript
public readonly serviceSubsetInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

---

##### `samenessGroup`<sup>Required</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup"></a>

```typescript
public readonly samenessGroup: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset"></a>

```typescript
public readonly serviceSubset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverRedirect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>

---


### ConfigEntryServiceResolverSubsetsList <a name="ConfigEntryServiceResolverSubsetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceResolverSubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverSubsets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>[]

---


### ConfigEntryServiceResolverSubsetsOutputReference <a name="ConfigEntryServiceResolverSubsetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceResolver } from '@cdktf/provider-consul'

new configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput">onlyPassingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing">onlyPassing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onlyPassingInput`<sup>Optional</sup> <a name="onlyPassingInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput"></a>

```typescript
public readonly onlyPassingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onlyPassing`<sup>Required</sup> <a name="onlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing"></a>

```typescript
public readonly onlyPassing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceResolverSubsets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>

---



